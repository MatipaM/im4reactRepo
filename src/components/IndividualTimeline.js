import * as React from 'react';
import {Component} from 'react'; 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default class IndividualTimeline extends Component {

    static defaultProps = {
        heading: "",
        wireframeImg: '',  
        altText : ""
    }

  render() {
    return (
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h3>{this.props.heading}</h3>
          <img src={this.props.wireframeImg} alt={this.props.altText} />
          </TimelineContent>
      </TimelineItem>
    )
  }
}
