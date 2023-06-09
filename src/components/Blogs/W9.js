import React, { useState, useRef, Component } from "react";
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import DisneyImg from '../../Images/Inspiration/Disney.png'

export default class W9 extends Component {

render()
{
  return (
    <IndividualInspoBlogs heading="Week 9 Blog Post" link="" altText="" img="" 
    p1="Theory Reflection" 
    p2="In this blog, I will be examining code bias. Code bias can be seen as the way in which people who create code pass their own implicit biases into the code they produce and how this bias is further emphasized when developers are mainly sourced from similar demographics. As hiring people with only a specific type of experience and then expecting them to produce a product which is non-biased for users coming from all types of diverse background will most likely lead to some users having more complications than others."
    p3={`The role of programmer from its origin, was considered a feminine role. A programmer position was largely advertised as a clerical job, thus resulting in a predominantly female field. Femineity in this case also refers to low wage, low status and low skilled professions. The initial role of a programmer was more so seen as a type of administration work as opposed to that of an engineer.`}
    p4={`Initially the job of a software developer was separated into two jobs. One who planned the code, this was typically a highly paying, well respected job, typically given to a man and another who implemented the code, i.e., seen as feminized, clerical work. The implementer was seen as simply translating the thoughts of the planner into a form which could be understood by the computer. As computers became more accessibke to the general public and not just specialists. The demand for developers grew, and the complexity of the software required to run on these machines also increased. At this point, a “new found appreciation for computer programmers, […] increasing demand […] accompanied by an equally dramatic rise in their salaries” (Ensmenger, 2015) encouraged companies to reframe the role of a programmer as a less feminized position. It encouraged companies to search for people who worked better with machines than people, resulting in a bias for men, as opposed to women who tend to considered as natural caregivers. The role of programmer was converted into a masculine dominated industry through the use of advertising and better job conditions.`}
    p5={`“Programming languages are languages” (Geyser, 2022), as a result they programs are susceptible to “invisible programming” (Moor, 1985). Invisible programming is embedded within a computer program. It can be both intentionally placed by the developer or unintentional. An example of unintentional code bias would be Google’s AI recognizing black people as gorillas. Bugs like these arise from decisions made within code, which reflect on how the programmer’s smaller decisions can create much larger problems when the application is released in a large scale environment. Invisible bias is dependent on who the developers are behind the program and explains why we need diverse programmers from all paths of life. As how one understands the world, is how they will code. Ideally, the people who requires the systems, should be the ones who code the systems, as they would have the best understanding of the system requirements.`}
    p6={`Dev Blog `}
    p7={`This week, I focused on producing reusable components. I enjoy the fact that with React.js, I am not recreating as much as code as I was with vanilla JavaScript. It means I spend less time optimizing my code, and more time, trying to structure how each component will work in relation to my entire system. I managed to finish my navigation, this means that the only components I need to do are those, which make up the individual pages. `}
    p8={`In terms of UI and UX. I have made the homepage of my website a canvas. As I would like users to get an understanding of what my internet art is about from the first interaction they have with the website. I would then like to add animations of line art to replicate how I imagine the user drawing their art on my website. I am also trying to lean into a more minimalistic perspective; therefore, I am hoping to add in the animations in a way which does not clutter my homepage or overwhelm my user.`}
    references={'References'}
    citation={`ENSMENGER, N. 2015. “Beards, Sandals and Other Signs of Rugged Individualism”: Masculine Culture within the Computing Professions. Scientific Masculinities (January 2015), pp. 38-65.`}
    citation2={`Geyser, H. (2022) ‘How we code matters’. DevConf, Cape Town.`}
    citation3={`MOOR, H, J. 1985. What is Computer Ethics? Metaphilosophy 16 (4), Otober: 266-275.`}
    />

  )
  }
}