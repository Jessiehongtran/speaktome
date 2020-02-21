import React from 'react';
import '../styles/showStatus.scss';

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
            <div className="show">
                {this.props.statusList.map(status => (
                    <div key={status.id} className="status-container">
                      <p className="date">{date.toString()}</p>
                      <p className="text">{status.status}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayStatus;