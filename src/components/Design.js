import React, { Component } from 'react'
import DesignTimeline from './DesignTimeline';
import gif from '../Images/LightBulb.gif'
import img1 from '../Images/Wireframes/BlogPost.png'
import './Design.css'

export default class Design extends Component {
  render() {
    return (
      <article>
        <section className="headingGrid">
        <h1>Design</h1>
        <img src={gif} alt="lightBulb gif" className="gif"/>
        </section>
        <DesignTimeline/>
    </article>
    )
  }
}
