import React, { Component } from 'react'
import Spline from '@splinetool/react-spline';

export default class Art extends Component {
  render() {
    return (
      <article>
        <section>
        <h1>Internet Art</h1>
        <section className="GameContainer">
        <Spline scene="https://prod.spline.design/cf2zdmG9MNtKXd5n/scene.splinecode" />
         </section>
        </section>
        </article>
    )
  }
}
