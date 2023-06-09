import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import DisneyImg from '../../Images/Inspiration/Disney.png'

export default class W13 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 13 Blog Post" link="" altText="" img="" 
    p2="For this week, I chose to reflect on’ Ethnocomputing’ (Tedre et. Al., 2006) and ‘The Impact of Instagram in the Works of Emerging South African Artists’ (Xaba et. al. 2021). Ethnocomputing consists of “local systems of computational knowledge” (Tedre et. Al., 2006). The digital divide increases as technology involves, this results in increased information inequality. As people from first worlds have larger and faster access to new technologies and information. Whereas people from third world countries, in which having access to the internet is a luxury as opposed to an expectation are falling further behind. This results in standard technology e.g. phones being developed in first world countries, as well as those countries claiming an unbiased universality about the information they produce. However, “[t]echnology that is best from one point of view is not necessarily best from another” (Tedre et. Al., 2006). An example of this in relation to Instagram, would be how aesthetics are prioritised over data consumption. If one was developing Instagram specifically for a low-speed-data area, then they may have included options to render images at a lower quality or other methods to make data consumption more efficient.  "
    p3={`In the case of South African artists using Instagram as a space for collaboration and advertisement of their creative business. If Instagram was contextualised for a South African setting, it may be more financially accessible in terms of advertising. The algorithm does not always show you posts from everyone who follows you, lowering the chance of your artwork being seen, prompting artists to have to pay for advertising. However, changing this algorithm may reduce the amount of times an artists would feel obligated to pay for Instagram adverts just to increase their profile visibility.`}
    references={'References'}
    citation={`Tedre, M., Sutinen, E., Kahkohen, E. & Kommers, P. 2006. Ethnocomputing: ICT in cultural and social context. Communications of the ACM. 49(1):126-130`}
    citation2={`Xaba, S., Fang, S., & Shah, D. 2021. The Impact of Instagram in the Works of Emerging South African Artists. Advances in Social Science, Education and Humanities Research. 568:85-89`}
    prevLink={`/im4reactrepo/W12`}
    topLink={`/im4reactrepo/W13`}
    nextLink={`/im4reactrepo/webArt`}
    />
  )
  }
}