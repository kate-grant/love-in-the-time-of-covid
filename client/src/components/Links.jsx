
import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import "./custom.css";


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='navbar'>
                    <Link to="/" className={`navbar-brand  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}>
                        Love in the Time of Covid
                    </Link>
                    
                    <Link to="/about" className={`nav-link  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}>
                                    About
                    </Link>
                    
                    <Link to="/submissionform" className={`nav-item  ${
                  props.location.pathname === "/submissionform" ? "active" : ""
                }`}>
                                    Submit
                    </Link>
                </div>
    
            </React.Fragment>
        )
    }
}

export default Links