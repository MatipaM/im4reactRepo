import React, { useState, useRef, Component } from "react";

export default class IndividualInspoBlogs extends Component {

  static defaultProps = {
    heading: "", 
    img:"",
    altText:"",
    link: "",
    p1: '',
    p2: "",
    p3:'',
    p4:'',
    p5:'',
    p6: '',
    p7: "",
    p8:'',
    p9:'',
    p10:'',
    p11:'',
    p12:'',
    citation: "",
    citation2: "",
    citation3: "",
    references: "References",
  }

render()
{
  return (
    
      <article>

<h1>
            <a href={this.props.link}>
          {this.props.heading}
          </a>
        </h1>
        
       <img
          src={this.props.img}
          alt={this.props.altText}
        />


    {/*convert into for loop */}
        <p>{this.props.p1}</p>
        <p>{this.props.p2}</p>
        <p>{this.props.p3}</p>
        <p>{this.props.p4}</p>
        <p>{this.props.p5}</p>
        <p>{this.props.p6}</p>
        <p>{this.props.p7}</p>
        <p>{this.props.p8}</p>
        <p>{this.props.p9}</p>
        <p>{this.props.p10}</p>
        <p>{this.props.p11}</p>
        <p>{this.props.p12}</p>
  

        <h3>{this.props.references}</h3>
        <cite>{this.props.citation}</cite>
        <cite>{this.props.citation2}</cite>
        <cite>{this.props.citation3}</cite>
      </article>
  )
  }
}