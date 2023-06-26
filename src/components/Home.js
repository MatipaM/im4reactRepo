import React, { Component } from 'react'
import './General.css'
import "./Home.css";
import Spline from '@splinetool/react-spline';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
        Welcome to my Internet Art Website
        </h1> 
        <article className="GameGrid">
        <section className="GameContainer">
        <Spline scene="https://prod.spline.design/43CJvgyKutP4aijU/scene.splinecode" />      
        {/* <a href="https://my.spline.design/townvespaminigamecopy-62c67ccf93c44f7566ad2c67b7b99104/">see my spline scene</a> */}
        {/* <Spline scene="https://prod.spline.design/0kVJIHryNlsr4hVw/scene.splinecode" /> working */}
        {/* <Spline scene="https://prod.spline.design/lrbDyhquAZX2JWYS/scene.splinecode" /> */}
         </section>
         <section className="pGrid">
         <p>Welcome to my internet art website. This website contains weekly reflections on class lectures, as well as the process behind my internet artwork and how I created it. The internet artwork I created relies heavily on user interaction, therefore please engage with it, as much as you would like :).</p>
         <p>As, the you navigate through the website, I hope to invoke a sense of calm within you. hence why i used coolly saturated tones as a throughout. I embraced a minimalistic aesthetic to avoid overwhelming the you with sensory information and instead make it clear how you can navigate through the site.</p>
         </section>
         </article>
        <p></p>
        <p></p>
        
    </div>
    )
  }
}
