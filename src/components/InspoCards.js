import React, { useState, useRef, Component } from "react";
import './General.css'
import "./BlogCard.css";
import "./InspoCard.css";
import {  Link } from "react-router-dom";

export default class BlogCard extends Component {

  static defaultProps = {
    websiteName: "", 
    img : "",
    altText: '',
    link: "",
    p1:""
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
            <a href={this.props.link}>
          {this.props.websiteName}
          </a>
        </h2>

        <div className="button-box">
          <p> {this.props.p1}          </p>
        </div>
      </div>
  )
  }
}