import React from 'react';
import '../styles/showStatus.scss';
import axios from 'axios';

class DisplayStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            toEdit: false,
            toEditId: "",
            contentToEdit: ""
        }

        this.handleEdit = this.handleEdit.bind(this)
  
    }

    deleteNote(id){
        axios.delete(`https://letsenglish.herokuapp.com/api/note/${id}`)
            .then(res => {
                console.log('res in del req', res)
            })
            .catch(err => console.log(err.message))
    }

    handleEdit(e){
        console.log(e.target.value)
        this.setState({contentToEdit: e.target.value})
    }

    editNote(){
        axios.patch(`https://letsenglish.herokuapp.com/api/note/${this.state.toEditId}`, {content: this.state.contentToEdit})
            .then(res => {
                console.log('res in patch', res)
                this.setState({toEdit:!this.state.toEdit})
            })
            .catch(err => console.log(err.message))
    }

  

    render(){
        console.log('props in Display', this.props)
        // const notes = []

        for (let i=0; i<this.props.statusList.length; i++){
            this.state.notes.push(this.props.statusList[this.props.statusList.length - i - 1])
        }

        if (this.state.toEdit){
            console.log('ready to edit')
            console.log('contentToEdit', this.state.contentToEdit)
            return (
                
                <div>
                    <input 
                        type="text"
                        value={this.state.contentToEdit}
                        onChange={this.handleEdit}
                    />
                    <button onClick={() => this.editNote()}>Edit</button>
                </div>
            )
        }

        return (
            <div className="show">
                {this.state.notes.map(note => (
                    <div key={note.id} className="status-container">
                      <p className="date">{note.created_at}</p>
                      <div className="note">
                        <p className="text">{note.content}</p>
                        <div className="btn">
                            <button onClick={() => this.setState({toEdit:!this.state.toEdit,  toEditId: note.id, contentToEdit: note.content})}>Edit</button>
                            <button onClick={() => this.deleteNote(note.id)}>Delete</button>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayStatus;