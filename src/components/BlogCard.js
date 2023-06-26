import React, { useState, useRef, Component } from "react";
import "./BlogCard.css";
import {  Link } from "react-router-dom";
import './General.css'

export default class BlogCard extends Component {

  static defaultProps = {
    heading: "",
    subheading: '',  
    altText: '',
    blogLink:"",
    image:""

  }


render()
{
  return (
    
      <div
        className="card"
      >
       <img
          src={this.props.img}
          alt={this.props.altText}
          className="sneaaker-img"
        />
        <h2 className="title">
          {this.props.heading}
        </h2>
        <h3>
         {this.props.subheading}
        </h3>

        <div className="button-box">
        <Link to={this.props.blogLink} className="purchase" >
            Read More... 
          </Link>
        </div>
      </div>
  )
  }
}