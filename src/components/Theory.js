import React, { Component } from 'react'
import BlogCard from './BlogCard'
import './Theory.css';
import './General.css';

export default class Theory extends Component {
  render() {
    return (
      <article >
        <h1>
         Theory Page
        </h1>
        <section className="containerGrid">
        <BlogCard heading="" subheading="Week 1" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 2" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 3" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 4" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 5" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 6" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 7" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 8" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 9" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 10" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 11" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 12" img="" altText = ""/>
        <BlogCard heading="" subheading="Week 13" img="" altText = ""/>
        </section>
     </article>
    )
  }
}
