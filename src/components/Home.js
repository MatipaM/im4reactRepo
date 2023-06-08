import React, { Component } from 'react'
import "./Home.css";
import Spline from '@splinetool/react-spline';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
        Welcome to my Internet Art Website v.4 routing
        </h1> 
        <article className="GameGrid">
        <section className="GameContainer">
        <Spline scene="https://prod.spline.design/43CJvgyKutP4aijU/scene.splinecode" />      
        {/* <a href="https://my.spline.design/townvespaminigamecopy-62c67ccf93c44f7566ad2c67b7b99104/">see my spline scene</a> */}
        {/* <Spline scene="https://prod.spline.design/0kVJIHryNlsr4hVw/scene.splinecode" /> working */}
        {/* <Spline scene="https://prod.spline.design/lrbDyhquAZX2JWYS/scene.splinecode" /> */}
         </section>
         <section className="pGrid">
         <p>Paragraph 1 about website</p>
         <p>Paragraph 2 about website</p>
         </section>
         </article>
        <p></p>
        <p></p>
        
    </div>
    )
  }
}
