import * as React from "react";
import {Component} from 'react'; 
import NavBar from "./NavBar";
import './General.css'

 class Header extends Component{
    render()
    {
        return (
            <div>
                <NavBar/>
            </div>
        );
    }

}

export default Header

