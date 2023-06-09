import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import DisneyImg from '../../Images/Inspiration/Disney.png'

export default class W5 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 5 – Fetch JSON Lecture" link="" altText="" img="" 
    p1={`The lecture explanations were detailed and concise. Lucky explains concepts of promises, and (a)/synchronous tasks well. He makes clear connections between the front-end and how data handling works in conjunction with the back end which makes it much easier to conceptualize how these technologies work together. `} 
    p2={`In terms, of developing my internet artwork, I limited the size of the canvas to a set 500px by 500px instead of making it depend on the size of the device. As a result, the user cannot draw up to the edge of the set canvas width.`}
    p3={`In the future, I would like to implement an undo and redo feature. Where users can make use of the undo feature as they would a rubber. As completely clearing the canvas appears unforgiving towards the user’s mistakes. Another idea I had to expand this artwork, would be store all users’ drawings on a database, so that when the next user’s load the website they can see what previous people have drawn and then add on to it.`}/>
  )
  }
}