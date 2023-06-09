import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import DisneyImg from '../../Images/Inspiration/Disney.png'

export default class W12 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 12 Blog Post" link="" altText="" img="" 
    p1="This week’s theory readings questioned the meaning of creativity and whether machines had the ability to be considered creative. I would argue that the computer is not creative, but the programmer behind the code and the artists behind the data fed into the machine are creative. Machines cannot create anything by themselves they are simply input/output systems invented by humans, which read data created by other humans in order to produce a final product. However, the input could also be the output from another machine (although at some point the input would have originated from a human). " 
    p2="Cohen argues that creativity does not merely stem from the human’s input but rather the intersection between the human and machine working together to create an output (Audry & Ippolito, 2019). One goal created to measure creativity is the imitation test, however Colton and Wiggins (2012) point out that this could potentially be harmful to the actual artists. This is because, as viewers we tend to project our feelings of the artwork onto the author. Yet, we don’t imagine machines as warm and emotive, we tend to vision them as neutral and cold sometimes even incapable of self-led creativity. Therefore it may be insulting to the artist if the viewer does not correctly identify which artwork they produced."
    references={'References'}
    citation={`AUDRY, S & OPPOLITO, J. 2019. Can Artificial Intelligence Make Art without Artists? Asks The Viewer. Arts 8(1): 1-8;`}
    citation2={`COLTON, S & WIGGINS, A. G. 2012. Computational Creativity: The Final Frontier? Frontiers in Artificial Intelligence and Applications 242:21-26`}
    prevLink={`/im4reactrepo/W11`}
    topLink={`/im4reactrepo/W12`}
    nextLink={`/im4reactrepo/W13`}
    />
  )
  }
}