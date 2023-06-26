import React, { Component } from 'react'
import Spline from '@splinetool/react-spline';
import blackCharacter from '../Images/SelectCharacter/BlackBiker.png'
import whiteCharacter from '../Images/SelectCharacter/WhiteBiker.png'
import './General.css' 
import './Art.css'

export default class Art extends Component {

  render() {
    return (
      <article>
        <section>
        <h1>Internet Art</h1>
        <h3>Select a character</h3>

        <section className='imgGrid'>
          <a href="/im4reactrepo/sceneB">
            <img src={blackCharacter}/>
            </a>

            <a href="/im4reactrepo/sceneW">
          <img src={whiteCharacter}/>
          </a>
        </section>
        </section>
        </article>
    )
  }
}
