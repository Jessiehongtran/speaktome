import React from 'react';
import '../styles/showStatus.scss';
import axios from 'axios';

class DisplayStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }
  
    }

  

    render(){
        console.log('props in Display', this.props)
        const date = Date();
        return (
            <div className="show">
                {this.props.statusList.map(note => (
                    <div key={note.id} className="status-container">
                      <p className="date">{date.toString()}</p>
                      <p className="text">{note.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayStatus;