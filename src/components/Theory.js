import React, { Component } from 'react'
import BlogCard from './BlogCard'
import './Theory.css';
import './General.css';

export default class Theory extends Component {

  // createCards()
  static defaultProps = {
    blogCards:[
      {heading:'',
      subheading:' ',
      blogLink:' '}
    ],
  }

  createCards()
  {
    this.props.blogCards.splice(0,this.props.blogCards.length)

    for(let i =3; i<=13; i++)
    {

      let sub;
        switch(i)
        {
          case 3: 
            sub = "Code Art Intro"
            break;
          case 4:
            sub="Conventions"
            break;
          case 5:
            sub = "Fetch JSON Lectur Reflection"
            break;
          case 8:
            sub = "Reflection on React.js"
            break;
          case 9:
            sub = "Code Bias"
            break;
          case 10:
            sub = "Creative Code"
            break;
          case 11:
            sub = "Dev Blog"
            break;
          case 12:
            sub = "Can Machines Be Creative?"
            break;
          case 13:
            sub = "EthoComuting and Instagram"
            break;
        }

        if(i!=6 && i!=7)
        {
          this.props.blogCards.push({"heading": "Week "+i+" Blog Post", "blogLink": "/im4reactrepo/W"+i, "subheading":sub});
        }

    }

    this.props.blogCards.push({"heading": "Neb/Web Art", "blogLink": "/im4reactrepo/webArt"})

    console.log(this.props.blogCards);
  }

  
  render() {
    return (    
      <article>
          {this.createCards()}

        <h1>
         Theory Page
        </h1>
        <section className="containerGrid">
          
          {this.props.blogCards.map(blogCard => 
                 <BlogCard heading={blogCard.heading} subheading={blogCard.subheading} blogLink={blogCard.blogLink}/>
          )}
          
        </section>

        <section>

        </section>
     </article>
    )
  }
}
