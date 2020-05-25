import React from 'react';
import axios from 'axios';
import Navigation from './navigation';
import '../styles/write2.css'

class Write2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            status: "",
            toEdit: false,
            toEditId: 0,
            contentToEdit: ""
        }

        this.handleEdit = this.handleEdit.bind(this)

        
    }

    qsort(arr){
        if (arr.length<2){
          return arr
        }
      
        var left = []
        var right = []
        var middle = []
      
        for (var i = 0; i < arr.length; i++){
          if (arr[i].id< arr[0].id){
            left.push(arr[i])
          }
          else if (arr[i].id> arr[0].id){
            right.push(arr[i])
          }
          else {
            middle.push(arr[i])
          }
        }
      
        var sorted_arr = this.qsort(right).concat(middle, this.qsort(left))
      
        return sorted_arr
      }

    fetchData(){
        axios.get('https://letsenglish.herokuapp.com/api/note')
            .then(res => {
                console.log('res in writepage', res)
                var arr = res.data
                arr = this.qsort(arr)
                this.setState({notes: arr})
            })
            .catch(err => console.log(err.message))

    }

    handleChange = event => {
        const status = {
            content: event.target.value,
            created_at:  new Date().toLocaleString()
        }
        this.setState({status:status})
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('this.state.status', this.state.status)
        axios.post('https://letsenglish.herokuapp.com/api/note', this.state.status)
            .then(res => {
                console.log('res in submit', res)
                this.fetchData()
            })
            .catch(err => console.log(err.message))
    }

    deleteNote(id){
        console.log('id in delete', id)
        axios.delete(`https://letsenglish.herokuapp.com/api/note/${id}`)
            .then(res => {
                console.log('res in del req', res)
                this.fetchData()
            })
            .catch(err => console.log(err.message))
    }

    handleEdit(e){
        console.log(e.target.value)
        this.setState({contentToEdit: e.target.value})
    }

    editNote(){
        console.log('toEditId', this.state.toEditId)
        console.log("efit fired")
        axios.patch(`https://letsenglish.herokuapp.com/api/note/${this.state.toEditId}`, {content: this.state.contentToEdit})
            .then(res => {
                console.log('res in patch', res)
                this.setState({toEdit:!this.state.toEdit})
                this.fetchData()
            })
            .catch(err => console.log(err.message))
    }


    componentDidMount(){
        console.log("mounted")
        this.fetchData()
    }


    render(){

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

        if (this.state.notes.length >0){ 

        return (
            <div>
                <Navigation />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        placeholder=""
                    />
                    <button>Pen down</button>
                </form>
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

            </div>
        )
                    }
        else {
            return (
            <div className="loader"></div>
            )
        }
    }

}
  
export default Write2;