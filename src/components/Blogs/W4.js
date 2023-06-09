import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';

export default class W4 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 4 Blog Post" link="" altText="" img="" 
    p1= {`Conventions do not lay out a set of rules for how one must live their life, but rather a set of expectations on how we view each other and act ourselves, in most aspects of everyday life. It “figures conspicuously in many of our activities” (Davidson, 1984:2). In Donald Davidson’s paper, ‘Communication and Convention’ (1984) , he focuses on the use of convention in language and how that relates to truth telling as well as how others decipher the speaker’s mood. In this mini-essay I will be using the same principles highlighted in Davidson’s paper and Mailloux’s, ‘Convention and Context’ (1983) to explore how convention is created and functions within the realm of software and website development.`}
    p2={`The creation of a convention involves the critical process of repetition, in which a certain action is performed consistently until it is viewed as the norm. Prior to repetition, there is the “preconventional shock value”(Mailloux, 1983:399). This shock value causes disruption in the medium by presenting a new practice in place of a previous normality. An example of this in software development would be the use of Aritfical Intelligence (AI). AI is defined as the ”simulation of human intelligence processes by machines, especially computer systems” (TechTarget, 2023). AI was initially seen as a tool for developers or engineers to speed up the process of development, gathering data and other professional engineering processes. However, over time through the mechanism of repetitive use, AI has become more accessible for the public. This accessibility can be seen in terms of cheaper prices and how much more user-friendly the presentation of AI has become. An example of the ordinary use of AI can be seen in the assistance of NotionAI. Notion was originally a note-taking website/application which has recently begun providing AI as a feature for users. This feature prompts users to insert a prompt, or ask AI to extend something they have already written or even ask it a question.`}
    p3={`In conclusion, conventions cannot determine how one would act but rather lays down expectations for how one could act. The use of conventions is prevalent across all industries in every day life. However, the creation and sustenance of a convention is highly dependent on repetition regardless of where/what industry that convention is being implemented.

    `}
    p4={`In terms of the technical lesson, I found it easy to code along, and did not have any issues implementing the provided API.

    `}
    references={'References'}
    citation={`BURNS, Ed. (2023) What is Artificial Intelligence (AI) ?. Available at: https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence (Accessed: 25 March 2023).`}
    citation2={`DAVIDSON, D. 1984. Communication and Convention. Springer 59 (1), April: 3-18.`}
    citation3={`MAILLOUX, S. 2015. Convention and Context. The Johns Hopkins UNIVERSITY PRESS 14 (2), Winter: 399-408.`}
   
    prevLink={`/im4reactrepo/W3`}
    topLink={`/im4reactrepo/W4`}
    nextLink={`/im4reactrepo/W5`}
    />
  )
  }
}