import React, { Component } from 'react'
import "./Home.css";
import Spline from '@splinetool/react-spline';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
        Internet Art
        </h1> 
        <article className="GameGrid">
        {/* <section className="GameContainer">
         <Spline scene="https://prod.spline.design/RaQFluFo5qvJH9JB/scene.splinecode" />
         </section> */} 
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
