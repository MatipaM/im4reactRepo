import React, { Component } from 'react'
import BlogCard from './BlogCard'

export default class Theory extends Component {
  render() {
    return (
      <div>
        <h1>
         Theory Page
        </h1>
        <BlogCard title="Week 1 - " date = "12.01.01"/>
     </div>
    )
  }
}
