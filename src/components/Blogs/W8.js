import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import DisneyImg from '../../Images/Inspiration/Disney.png'

export default class W8 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 8 Blog Post" link="" altText="" img="" 
    p1="Reflection on React.js" 
    p2="I have been working through the two course crashes from week 8. The first one being a note taking app and the other a website which allows users to interact with the IMDB API. Working through these courses has given me an in-depth analysis into the differences between JavaScript and React. The main differences that I have noticed, is how react combines HTML and JS into one .js file. JavaScript elements are embedded within HTML tags e.g. <h1>{variableName}</h1>. I found this made debugging a lot easier, because I spent less time trying to find which lines of JavaScript were linked to corresponding HTML elements. I also found the component structure of react interesting, as it replaces redundant code with reusable components. For example, instead of adding in a header on each page, I can reuse a header I have created in the form of a Header component."
    p3={`Reflection on Theory`}
    p4={`The structure of one’s personal user interface for their application or product is a combination of their aesthetic goals and universal symbolization (Hassenzahl & Tractinsky, 2006). Symbolization is heavily based on the user’s previous experiences in relation to other technologies. However, to design a UI based on previous experiences solely can be repetitive and limit creativity. The other option is for a designer to create their own symbols, however this is frustrating for the user, as upon arrival to the website they are most likely to be confused by these new symbols. This “preconventional shock value” (Mailloux, 1983) arises when a convention in a medium is replaced by an innovation. Papanek defines design as the “conscious and intuitive effort to impose meaningful order” (1984). It becomes the prerogative of the designer to ensure that the system teaches the user what the symbols mean as they user traverses through the website. The designer must create a design language which provides minimal, yet continual feedback (UXPin, 2022) to clearly communicate what each symbol stands for.`}
    p5={`Another factor that must be considered when designing and implementing a user interface is the experience it will create for the user. The concept that a user interface can possibly affect the user’s emotions, means that the way an interface is designed can result in positive or negative emotional outcomes depending on how well structured the website is in relation to the design goals of the programmer. “A single negative interaction can have a significant negative impact” (Hassenzahl & Tractinsky, 2006) therefore any parts of the website which do not communicate well and are frustrating for the user may overshadow positive experiences omitted from other sections of the website. It should also be noted, that even though one may design for a specific emotion, they do not necessarily have that much control over their user’s emotions (Hassenzahl & Tractinsky, 2006). A designer can only contextualise the emotion, they are planning for the user’s experience.`}
    
    references={'References'}
    citation={`HASSENZAHL, M. & TRACTINSKY, N. 2006. User research – a research agenda. Behaviour & Information Technology 25(2) 91-97.`}
    citation2={`MAILLOUX, S. 2015. Convention and Context. The Johns Hopkins UNIVERSITY PRESS 14 (2), Winter: 399-408.`}
    citation3={`PAPANEK, V. 1984. Design for the real world. United Kingdom: Thames $ Hudson Ltd.`}
    prevLink={`/im4reactrepo/W5`}
    topLink={`/im4reactrepo/W8`}
    nextLink={`/im4reactrepo/W9`}
    />
  )
  }
}