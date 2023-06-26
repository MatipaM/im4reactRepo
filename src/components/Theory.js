import React, { Component } from 'react'
import BlogCard from './BlogCard'
import './General.css';
import './Theory.css';

import { BlogData } from './Blogs/BlogData';

export default class Theory extends Component {

  // createCards()
  static defaultProps = {
    blogCards:[
      {heading:'',
      subheading:' ',
      blogLink:' ',
    image:''}
    ],
  }
  
  render() {
    return (    
      <article>
        <h1>
         Theory Page
        </h1>
        <section className="containerGrid">
      
        {BlogData.map(data => 
                 <BlogCard heading={data.heading} subheading={data.subheading} blogLink={data.topLink} img={data.img} altText={data.alt}/>
          )}
          
        </section>

        <section>

        </section>
     </article>
    )
  }
}
