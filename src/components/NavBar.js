import * as React from "react";
import {Component} from 'react'; 
import {  Link, NavLink } from "react-router-dom";
import Home from './Home';
import "./NavBar.css";

 class NavBar extends Component{
    render()
    {
        return (
        <div className="nav">
          <li>
            <NavLink to="/" activeClassName="active" className="link">Home</NavLink>
            <NavLink to="/im4reactrepo/Design" activeClassName="active" className="link">Design</NavLink>
            <NavLink to="/im4reactrepo/Theory" activeClassName="active" className="link">Theory</NavLink>
            <NavLink to="/im4reactrepo/Art" activeClassName="active" className="link">Internet Art</NavLink>
          </li>
        </div>
        );
    }
n
}

export default NavBar



