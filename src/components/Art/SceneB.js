import React, { Component } from 'react'
import Spline from '@splinetool/react-spline';
import '../General.css'
import '../Art.css'

export default class SceneB extends Component {

  chooseScene()
  {

  }

  render() {
    return (
      <article>
        <section>
        <h1>Internet Art</h1>
        <h2>Please wait for the artwork to load :)</h2>
    
        <section className="GameContainer">
          {/*use States to load scene */}
        <Spline scene="https://prod.spline.design/NuidjzYS7LlsSGYA/scene.splinecode" />

        {/*
        
        */}
         </section>
        </section>
        </article>
    )
  }
}
