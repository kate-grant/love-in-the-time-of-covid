import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import {menu} from './menu.js'
import './custom.css'
 
 const NavItem = ({className, href, children}) => (
    <li className={`${className}`}>
        <a className="myLinks" href={href}>
            {children}
        </a>
    </li>
);

const Nav = () => (
    <nav className="myNav">
      <ul className="myList">
        {menu.map(item => (<NavItem {...item}/>))}
      </ul>
    </nav>
  ); 


class NavBar extends Component {
    render() {
        return (
            <div style={{display: "flex"}, {position: "sticky"}, {width: "100vh"}, {height: "100px"}}>
                <Nav />
            </div>
        )
    }
}

export default withRouter(NavBar)