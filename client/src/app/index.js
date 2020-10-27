
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import SubmissionForm from "../components/SubmissionForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/custom.css'



class App extends Component{
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="mainBody">
                        <nav>
                        <ul className="myList">
                            <li>
                            <Link className="navLink" to="/">Love in the Time of Covid</Link>
                            </li>
                            <li>
                            <Link className="navLink" to="/about">About</Link>
                            </li>
                            <li>
                            <Link className="navLink" to="/submit">Submit</Link>
                            </li>
                        </ul>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/submit">
                            <Submit />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}


  
function Submit() {
    return (
        <SubmissionForm />
    )
  }

export default App;
