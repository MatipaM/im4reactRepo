import './BlogCard.css';

import React, { Component } from 'react'

export default class BlogCard extends Component {

    static defaultProps = {
        title: "",
        date: "",
        summary: ""

        
    }

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <h2>{this.props.date}</h2>
        <p>{this.props.summary}</p>
      </div>
    )
  }
}
