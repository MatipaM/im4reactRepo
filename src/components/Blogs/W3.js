import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';

export default class W3 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 3 Blog Post" link="" altText="" img="" p1="I really enjoyed the lecture videos as I felt it provided a very detailed insight into the fundamentals of JavaScript. The videos were long, which I loved as concepts were not rushed and multiple examples as well as variations were provided. The only technical questions I have are related to ordering the blog posts from the mostly recently viewed to latest (as I tried to code along to replicate it but it did not work for me)." 
    p2={`I love how broad web art is, I feel that it allows everyone to engage with a specific niche in a way that is both creative and specific to who they are. Areas, that most interest me, are those which include code art and software art as I think that is an area I would like to explore. I was interested by how the readings explore how the movement from desktop to mobile device as the primary means for accessing the internet, as well as Apple's disregard for flash as the reason behind flash's downfall. An interesting point made by McNara, was how she hoped that our web history won’t be erased" (2020). I found this interesting because the internet tends to be considered a place where nothing is erasable and everything you post is almost given an infinite lifespan. However, the demise of flash, has at the least shown people, that 'original' artworks may not always be supported on the internet. Instead we may only be able to rely on supported copies to get an essence of what the original was like.`} p3={`Another side to the way web history is recorded, is how files are organised and updated, Ann Armstrong, an architect battling with the upkeep and maintenance of architectural repositories suggests that records “should be organised with an archivist in mind” (Armstong, A., E., 2006). This implies that the ordinary user may not be able to find internet artworks as intuitively as they could before. However, the role of an archivist solely dedicated to the maintenance and safe online storage of internet artwork could be critical to ensuring that online equivalents to the ‘Mona Lisa’ are no longer damaged beyond repair due to bad upkeep.`}
    references={'References'}
    citation={`Another side to the way web history is recorded, is how files are organised and updated, Ann Armstrong, an architect battling with the upkeep and maintenance of architectural repositories suggests that records “should be organised with an archivist in mind” (Armstong, A., E., 2006). This implies that the ordinary user may not be able to find internet artworks as intuitively as they could before. However, the role of an archivist solely dedicated to the maintenance and safe online storage of internet artwork could be critical to ensuring that online equivalents to the ‘Mona Lisa’ are no longer damaged beyond repair due to bad upkeep.`}
    prevLink={`/im4reactrepo/webArt`}
    topLink={`/im4reactrepo/W3`}
    nextLink={`/im4reactrepo/W4`}
  />
  )
  }
}