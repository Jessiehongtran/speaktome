import React from 'react';
import WriteStatus from '../components/writeStatus';
import DisplayStatus from '../components/showStatus';

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
            status: status
        }
        this.setState({
            statusList : [...this.state.statusList, newStatus]
        })
    }


    render(){
        

        return (
            <div>
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