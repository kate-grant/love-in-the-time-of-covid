import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import '../components/custom.css'

class SubmissionForm extends React.Component {

    constructor(){
        super();
        this.state = {
            idea: "your digital/distanced romance here",
            location: "your location",
            tag: "tag"
        };
        
        console.log("contructed");
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }); 
        console.log("handled");  
    }


    postContent = (e) => {
        e.preventDefault();
        const { idea, location, tag } = this.state;
        console.log("will post");
        
        axios.post("http://localhost:3000/api/advice", { idea, location, tag });

        this.deleteText();
        console.log("deleted");  
    }
   
    deleteText(){
        this.state = {
            idea: "your digital/distanced romance here",
            location: "your location",
            tag: "tag"
           
        };
        console.log("deleted");
    }



    render(){
        const { idea, location, tag }  = this.state;
        
        return(
       <div className="submissionform">
            
                <textarea className="adviceText" name="idea" value={idea} onChange={this.handleChange}></textarea> 
                <input className="input" type="text" name="location" value={location} onChange={this.handleChange}></input> 
                <input className="input" type="text" name="tag" value={tag} onChange={this.handleChange}></input> 
                <Link to="/">
                    <button className ="submitButton" type="submit" onClick={this.postContent}> Submit </button>
                </Link>
                
       </div>
    )
   
  }
}

export default SubmissionForm;