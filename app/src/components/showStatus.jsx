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
        const notes = []

        for (let i=0; i<this.props.statusList.length; i++){
            notes.push(this.props.statusList[this.props.statusList.length - i - 1])
        }

        return (
            <div className="show">
                {notes.map(note => (
                    <div key={note.id} className="status-container">
                      <p className="date">{note.created_at}</p>
                      <p className="text">{note.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayStatus;