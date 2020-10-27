import React from "react"
import axios from "axios"
import '../components/custom.css'

class SubmissionForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            idea: "your digital/distanced romance here",
            location: "your location",
            tag: "tag"
        }
    }

    handleChange(e){
        this.setState({idea: e.target.value}, {location: e.target.value}, {tag: e.target.value})   
    }
  
    postContent(){
        window.self = this 
        axios.post("http://localhost:3000/api/advice", {
            idea: this.state.idea,
            location: this.state.location,
            tag: this.state.tag
        
    }).then(function (response) {
        window.self.deleteText()
    })
    }

    deleteText(){
        this.setState({idea: ""}, {location: ""}, {tag: ""})
    }

    render(){
        return(
       <div className="submissionform">
            <textarea className="adviceText" value={this.state.idea} onChange={this.handleChange.bind(this)}></textarea> 
            <input className="input" type="text" value={this.state.location} onChange={this.handleChange.bind(this)}></input> 
            <input className="input" type="text" value={this.state.tag} onChange={this.handleChange.bind(this)}></input> 
            <button className ="submitButton" onClick={this.postContent.bind(this)}> Submit </button>
       </div>
    )
  }
}

export default SubmissionForm