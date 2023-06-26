import React, { Component } from 'react'
import DesignTimeline from './DesignTimeline';
import gif from '../Images/LightBulb.gif'
import './Design.css'
import roughSketch from '../Images/Wireframes/RoughSketch.jpg';
// import './IndividualTimeline'
import InspoCards from './InspoCards';
import AppleImg from '../Images/Inspiration/Apple.png'
import DistantImg from '../Images/Inspiration/DistantSummit.png'
import DisneyImg from '../Images/Inspiration/Disney.png'
import BlogCard from './BlogCard';
import { DesignData } from './Blogs/DesignData';
import BlogData from './Blogs/BlogData';
import './General.css'

export default class Design extends Component {
  render() {
    return (
      <article>
        <section className="headingGrid">
        <h1>Design</h1>
        <img src={gif} alt="lightBulb gif" className="gif"/>
        </section>

        <section>

        <h2> Rough Sketches </h2>
        <img src={roughSketch} alt="scanned page of my wireframe sketches" className="sketches"/>
        </section>

        <DesignTimeline/>
        <section className='Inspo'>
          <h2>Website Inspirations</h2>
          <section className="InspoGrid">
          <InspoCards websiteName="Apple" link="https://www.apple.com" altText="link to the Apple website" img={AppleImg} p1="The animations on the website engages the user, making the webpage appear more dynamic. each animation is contextualized well with the product they are trying to sell."/>
          <InspoCards websiteName="Distant Summit" link="https://dribbble.com/shots/6266456-D-E-S-T-I-N-A-T-I-O-N" altText="link to the Dribble website showcase of Distant Summit website" img={DistantImg} p1="Website seamlessly integrates the artwork well in with other aspects of the website e.g. the navbar. I would like to mimic this, as my website’s nav bar and artwork seem very separate and almost unrelated."/>
          <InspoCards websiteName="Disney Character UI" link="https://theschedio.com/design-inspiration-7/" altText="link to the Dribble website showcase of Disney Character UI" img={DisneyImg} p1="Blog cards are minimalistic yet appealing. The change onMouseHover, makes the Disney characters come alive."/>
          </section>

          <section>
            <h2>Design Essays</h2>
            <section className="InspoGrid">
              {DesignData.map(designData => 
                 <BlogCard heading={designData.heading} blogLink={designData.blogLink} img={designData.img}/>
              )}
              </section>
          </section>

          </section>
    </article>
    )
  }
}
