import React, { Component } from 'react'
import "./Home.css";
import Spline from '@splinetool/react-spline';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
        Internet Art Website
        </h1> 
        <article className="GameGrid">
        <section className="GameContainer">
        <Spline scene="https://prod.spline.design/i3GMYRMNbbNRyy9A/scene.splinecode" />
        {/* <a href="https://my.spline.design/townvespaminigamecopy-62c67ccf93c44f7566ad2c67b7b99104/">see my spline scene</a> */}
        
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
