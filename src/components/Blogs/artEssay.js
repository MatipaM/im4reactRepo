import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';

export default class AE extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="(Old) Internet Art Essay" link="" altText="" img="" 
    p1={`My initial goal for my internet artwork was to create an online notepad, where users could draw via any type of input device. I wanted to create a space where the user could create their own digital art for free without the need of an expensive device. However, I do recognize that accessing the website via a drawing tablet and stylus would make interacting with a virtual notepad much easier than using a mouse and keyboard. Hence creating a different experience for various users, in which those without access to expensive equipment may not find the artwork has easy to engage with.`}    
    p2={`My internet art returns the agency back to the user by allowing them to express how they feel instead of looking at a piece which may instruct or alter their emptions in any way. In the future, I plan to implement a system which allows users to leave their digital footprint for the next user, by saving their work and showing them to the next user who accesses the website. The internet artwork would both influence the user’s current emotions by presenting them with a partially filled canvas, but it would also empower the user by allowing them to respond.`}
    p3={`For future improvements, I would like to save all previous users drawings in the database, so that they can continue working on a previous draft. Another idea I had was to only save one of the previous user’s drawings in order to prevent the canvas from being overfilled and preventing future users from wanting to add on. However, I feel that would mean I would have to have some sort of selection algorithm which would choose which user’s work to save in the database, in the event that two users had been drawing at the same time. Which can be invalidating for the user’s work who is not saved. As work would be saved on refresh, therefore users can see what has been saved. Instead, the user has a thick pain brush which they can use to create their own background for their work. That way part of the creation is allowing them to decide which work should be erased in order to make room for their own. Initially when planning this artwork, I wanted to include login/sign in pages so that the user’s art could be fetched from the database when they sign in. There is an offset between the cursor and the lines drawn which can be disorienting for users. I tried to tweak the settings to bring the stroke and cursor as close together as possible, but I struggled to fix the issue.    `}
    references={''}
    prevLink={`/im4reactrepo/UIEssay`}
    topLink={`/im4reactrepo/artEssay`}
    nextLink={`/im4reactrepo/SG`}
    />
  )
  }
}