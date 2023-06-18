import React, { Component } from 'react'
import Spline from '@splinetool/react-spline';
import blackCharacter from '../Images/SelectCharacter/BlackBiker.png'
import whiteCharacter from '../Images/SelectCharacter/WhiteBiker.png'
import './Art.css'

export default class Art extends Component {

  chooseScene()
  {

  }

  render() {
    return (
      <article>
        <section>
        <h1>Internet Art</h1>

        <section className='imgGrid'>
          <img> </img>
        </section>

        <section className="GameContainer">
          {/*use States to load scene */}
        <Spline scene="https://prod.spline.design/cf2zdmG9MNtKXd5n/scene.splinecode" />
        <Spline scene="https://prod.spline.design/NuidjzYS7LlsSGYA/scene.splinecode" />

        {/*
        
        */}
         </section>
        </section>
        </article>
    )
  }
}
