import React from 'react';
import WriteStatus from '../components/writeStatus';
import DisplayStatus from '../components/showStatus';
import Navigation from '../components/navigation';
import axios from 'axios';

class WritePage extends React.Component {
    constructor(){
        super();
        this.state = {
            statusList : []
        }
    }

    addStatus = status => {
        const newStatus = {
            id: Date.now(),
            content: status.content,
            created_at: status.created_at
        }
        console.log('newStatus', newStatus)
        this.setState({
            statusList : [...this.state.statusList, newStatus]
        })
    }

    componentDidMount(){
        axios.get('https://letsenglish.herokuapp.com/api/note')
            .then(res => {
                console.log('res in writepage', res)
                this.setState({statusList: res.data})
            })
            .catch(err => console.log(err.message))
    }


    render(){
        console.log('statusList', this.state.statusList)

        return (
            <div>
                <Navigation />
                <WriteStatus
                    addStatus={this.addStatus} 
                />
                <DisplayStatus
                    statusList={this.state.statusList}
                />
            </div>
        )
    }
}

export default WritePage;