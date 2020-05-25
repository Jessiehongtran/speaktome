import React from 'react';
import axios from 'axios';
import '../styles/writeStatus.scss';

class WriteStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    handleChange = event => {
        const status = {
            content: event.target.value,
            created_at:  new Date().toLocaleString()
        }
        console.log('statussss', status)
        this.setState(status)
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('status', this.state)
        this.props.addStatus(this.state)
        axios.post('https://letsenglish.herokuapp.com/api/note', this.state)
            .then(res => {
                console.log('res', res)
            })
            .catch(err => console.log(err.message))
    }


    render(){

        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    onChange={this.handleChange}
                    placeholder=""
                />
                <button>Pen down</button>
            </form>
        )
    }
}

export default WriteStatus;