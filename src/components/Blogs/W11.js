import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import DisneyImg from '../../Images/Inspiration/Disney.png'

export default class W11 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 11 Blog Post" link="" altText="" img="" 
    p1="Dev Blog" 
    p2="This week I decided to stop This week I decided to stop working on a collaborative 2D canvas. As I felt the idea of a 2D canvas was unoriginal and I wanted to work on a more creative idea which contained an element of gamification to make the experience more enjoyable for users. I considered creating a game; however, I did not want to completely scratch the idea of the canvas that I created in Assignment 1. Instead, I wanted to create a three-dimensional canvas which worked off the idea of dragging and dropping 3d modes into a grid placed on the website. Like games, such as sims. The player would have access to an array of 3D models, in which they can rotate 4 ways and place on the grid. To make my entire website a piece of art as opposed to the one page. The player would be navigating through a ‘house’. In which the index, is the outside/welcome mat. As they travers through the website, they will also be traversing through a home. on a collaborative 2D canvas. As I felt the idea of a 2D canvas was unoriginal and I wanted to work on a more creative idea which contained an element of gamification to make the experience more enjoyable for users"
p3={`For my final prototype, I would like to make the entire website customizable. 3D designs which they design on the canvas could be translated to their corresponding pages. E.g. if the player is designing a library. As they are designing this canvas, the theory/blog post page would change in accordance to the furniture the user has added. (This would replace the collaborative option on my two-dimensional website). I think that allowing the user to change the website changes, would allow the user to interact more meaningfully with the website, thereby increasing the emotional attachment they have to the website. `}
  p4={`The website would start off as minimal and then progress into the player’s designs, as they drag and drop objects onto the canvas grid. For this prototype I am not going to implement, the ability for the user to change the look of other pages apart from the internet art. I will instead use my own 3d models and design for those pages. I will then implement the ability for them to make customizable changes for my final prototype. If I have time, I will also include sound effects.`}
  prevLink={`/im4reactrepo/W10`}
  topLink={`/im4reactrepo/W11`}
  nextLink={`/im4reactrepo/W12`}
  />
  )
  }
}