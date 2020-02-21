import React from 'react';
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