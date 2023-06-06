import React, { useState, useRef, Component } from "react";
import "./BlogCard.css";

export default class BlogCard extends Component {

  static defaultProps = {
    heading: "",
    subheading: '',  
    img : "",
    altText: ''
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
        <h1 className="title">
          {this.props.heading}
        </h1>
        <h2>
         {this.props.subheading}
        </h2>

        <div className="button-box">
          <button className="purchase" >
            Read More...
          </button>
        </div>
      </div>
  )
  }
}