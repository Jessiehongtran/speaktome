import React from 'react';
import axios from 'axios';
import '../styles/writeStatus.scss';

class WriteStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: '',
        }
    }

    handleChange = event => {
        this.setState({status: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('status', this.state.status)
        this.props.addStatus(this.state.status)
        axios.post('https://letsenglish.herokuapp.com/api/note', this.state.status)
            .then(res => {
                console.log('res', res)
            })
            .catch(err => console.log(err.message))
    }


    render(){

        console.log(this.state.status)
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