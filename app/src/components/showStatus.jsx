import React from 'react';

class DisplayStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        console.log('props in Display', this.props)
        const date = Date();
        return (
            <div>
                {this.props.statusList.map(status => (
                    <div key={status.id}>
                      <p>{date.toString()}</p>
                      <p>{status.status}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayStatus;