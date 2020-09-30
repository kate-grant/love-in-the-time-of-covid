
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./custom.css";


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='navbar'>
                    <Link to="/" className="navbar-brand">
                        Love in the Time of Covid
                    </Link>
                    
                    <Link to="/about" className="nav-link">
                                    About
                    </Link>
                    
                    <Link to="/advice/submit" className="nav-link">
                                    Submit
                    </Link>
                </div>
    
            </React.Fragment>
        )
    }
}

export default Links