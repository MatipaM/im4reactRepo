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
        <BlogCard heading="Week 3 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W3"/>
        <BlogCard heading="Week 4 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W4"/>
        <BlogCard heading="Week 5 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W5"/>
        <BlogCard heading="Week 8 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W8"/>
        <BlogCard heading="Week 9 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W9"/>
        <BlogCard heading="Week 10 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W10"/>
        <BlogCard heading="Week 11 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W11"/>
        <BlogCard heading="Week 12 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W12"/>
        <BlogCard heading="Week 13 Blog Post" subheading="" img="" altText = "" blogLink="/im4reactrepo/W13"/>
        <BlogCard heading="Neb/Web Art" subheading="" img="" altText = "" blogLink="/im4reactrepo/webArt"/>
        </section>
     </article>
    )
  }
}
