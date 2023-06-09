import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import DisneyImg from '../../Images/Inspiration/Disney.png'

export default class W10 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 10 Blog post – Creative Code" link="" altText="" img="" 
    p1={`Internet art is made possible using creative coding. Creative code not only allows artists to create their own tools to better optimize their workflow, but it also allows artists to gain a deeper understanding of how coded technology can both enable and reinforce an unjust society. An example provided by Aaron Knochel and Ryan Patton, in ‘If Art Education Then Critical Digital Making: Computational Thinking and Creative Code’ (2015) is how the google search engine, will not always produce the most relevant search result but will prioritise sites which have paid for advertising and present those ones higher up on their hierarchy. Other biases such as invisible programming which are biased decisions made by the programmer, can only be picked up by an outside source (e.g. a different programmer, or someone outside the organization responsible for making the product) who has the ability to understand the code being written, and therefore the decisions being made behind the code. This way, artists can pick up bias’s hiding behind the functionality of a piece of code. As “code not only describes the work, it produces it” (Hertz, 2009). “Artists perform the role of innovators by raising questions to the accepted function of society [… i]ndividuals abstaining […] from technological society are allowing themselves to be […] uninformed consumers” (Knochel & Patton, 2015). It therefore becomes the prerogative of the modern-day artist, to educate themselves on how invisible systems operate in order to create bias against certain users of technology. However, it is important to note that the code behind these structure can only be examined if the code is open and available for public critique. E.g., open-source software which allows users from all over the world to collaborate on a single project. This encourages diversification through participation and decreases the chance of creating a biased product. `}
    p2={`There is also a stigma within the art community that “physical touch of the artist’s hand is more authentic and impactful for […] experience” (Knochel & Patton, 2015). However, I would argue that how powerful the experience the artist wants to create is dependent on how the content they are trying to portray works with their chosen medium. For example, a static piece may be more impactful on a static medium such as watercolor. However, if an artist wants to create something which will respond to their viewer’s action, a single watercolor, will most likely not be the most effective medium for the intended experience. Software as a medium allows creators to design for more dynamic experiences (Hertz, 2009).`}
    p3={`Week 10 Dev Blog`}
    p4={`For my internet art, my goal is to create a public canvas which can be accessed and worked on by users all over the world. The lecture from this week, ‘properties’ was useful for achieving my internet art goals. I was thinking that if I manage to create a login system, I could use props to store the data of individual users. I could also use props to create a default case scenario. For example, if a user is not logged in, they would not be able to create a collaborative canvas and they would not be able to save their work on the website. They would only be able to download their personal canvas. I could also use props for new users, e.g., instead of the user being shown the last canvas they worked on, they would be taken to a blank canvas with a toggle button (to switch between public collaborative canvas or private).`}
    references={'References'}
    citation={`HERTZ, P. 2009. Art, Code, and the Engine of Change. Advancing Art & Design. 68 (1.), Spring: 58-75.`}
    citation2={`KNOCHEL, D, A & PATTON, M. R. 2015. If Art Education Then Critical Digital Making: Computational Thinking and Creative Code. National Art Education Association. 57 (1.), Fall: 21-38.`}
    prevLink={`/im4reactrepo/W9`}
    topLink={`/im4reactrepo/W10`}
    nextLink={`/im4reactrepo/W11`}
    />
  )
  }
}