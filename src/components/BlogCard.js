import React, { useState, useRef, Component } from "react";
import "./BlogCard.css";
import {  Link } from "react-router-dom";

export default class BlogCard extends Component {

  static defaultProps = {
    heading: "",
    subheading: '',  
    // img : "",
    // altText: '',
    blogLink:""

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