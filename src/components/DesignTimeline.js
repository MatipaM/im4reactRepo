import * as React from 'react';
import {Component} from 'react'; 
import Timeline from '@mui/lab/Timeline';
import IndividualTimeline from './IndividualTimeline';
import './General.css'
import './Design.css'
import homePageImg from '../Images/Wireframes/HomePage.png'
import designImg from '../Images/Wireframes/Design.png'
import blogPostImg from '../Images/Wireframes/BlogPost.png'
import blogPost2Img from '../Images/Wireframes/FlippedBlogPost.png'
import artImg from '../Images/Wireframes/InternetArt.png'

export default class DesignTimeline extends Component {

  render() {
    return (
      <article>

<section>
      <h2> Wireframes </h2>
    <Timeline position="alternate">
      <IndividualTimeline heading="HomePage" wireframeImg={homePageImg} altText="Homepage wireframe"/>
      <IndividualTimeline heading="Design" wireframeImg={designImg} altText="Design page"/>
      <IndividualTimeline heading="Theory" wireframeImg={blogPostImg} altText="theory page"/>
      <IndividualTimeline heading="Theory (Flipped Cards)" wireframeImg={blogPost2Img} altText="flipped blog cards from theory page"/>
      <IndividualTimeline heading="Internet Art" wireframeImg={artImg} altText="Internet Art"/>
    </Timeline>
</section>


</article>
    )
  }
}
