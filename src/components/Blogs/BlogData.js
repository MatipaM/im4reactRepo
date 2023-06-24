import React, { Component } from 'react'
import IndividualInspoBlogs from '../IndividualInspoBlogs';

export default class BlogData extends Component {

    cnstructor(props){
        // this.state = {
        //     index: 0
        //   }
    }

        static defaultProps = {
          InspoBlogs:[
            {heading: "",
            subheading: "",
            img:"",
            altText:"",
            link: "",
            p1: '',
            p2: "",
            p3:'',
            p4:'',
            p5:'',
            p6: '',
            p7: "",
            p8:'',
            p9:'',
            p10:'',
            p11:'',
            p12:'',
            citation: "",
            citation2: "",
            citation3: "",
            references: "References",
        
            prevLink:"",
            topLink:"",
            nextLink:"",},
          ],

          paths:[],

          index:[
            0
          ],
          
        }

        checkPage()
        {

            for(let i =0; i< this.props.paths.length+3; i++) //be careful of this indexing!!!
            {
                if(window.location.pathname.includes(this.props.paths[i]))
                {
                    let offset;

                    if(i<3)
                    {
                        offset = 3  
                    }else{
                        offset = 5;
                    }

                    console.log("is true");
                    this.props.index[0]  =i+offset;
                    console.log(this.props.index[0]);
                    console.log(this.props.InspoBlogs);
                    console.log(this.props.InspoBlogs[this.props.index[0]]);
                    console.log(this.props.InspoBlogs[this.props.index[0]].heading);
                    return;
                }
            }
        }
      
        createInspoCards()
        {
            this.props.InspoBlogs.splice(0,this.props.InspoBlogs.length)
            this.props.paths.splice(0,this.props.paths.length)

            for(let i=3; i<=17; i++)
            {             
                    this.props.InspoBlogs.push( {
                    heading: "",
                    subheading: "",
                    img:"",
                    altText:"",
                    link: "",
                    p1: '',
                    p2: "",
                    p3:'',
                    p4:'',
                    p5:'',
                    p6: '',
                    p7: "",
                    p8:'',
                    p9:'',
                    p10:'',
                    p11:'',
                    p12:'',
                    citation: "",
                    citation2: "",
                    citation3: "",
                    references: "References",
                
                    prevLink:"",
                    topLink:"",
                    nextLink:"",},);

                    if(i<17 && i!=6 && i!=7 && i<14)
                    {
                        this.props.paths.push("W"+i);
                    }else if(i==17){
                        this.props.paths.push("webArt");  
                    }
            }

            console.log(this.props.InspoBlogs);

          for(let i =3; i<=13; i++)
          {

              if(i!=6 && i!=7)
              {
                console.log(i);
                console.log(this.props.InspoBlogs[i]);
                this.props.InspoBlogs[i].heading="Week "+i+" Blog Post";
              }
      
              let prev= i-1;
              let next= i+1;

              switch(i)
              {
                case 3:
                  this.props.InspoBlogs[i].topLink = "/im4reactrepo/W"+i; 
                  this.props.InspoBlogs[i].prevLink = "/im4reactrepo/webArt";
                  this.props.InspoBlogs[i].nextLink = "/im4reactrepo/W"+(next); //change to numeric operation instead of concat
                  break;
                case 6:
                  break;
                case 7:
                  break;
                case 16:
                    this.props.InspoBlogs[i].topLink = "/im4reactrepo/W"+i;
                  this.props.InspoBlogs[i].prevLink = "/im4reactrepo/W"+prev;
                  this.props.InspoBlogs[i].nextLink = "/im4reactrepo/webArt";
                    break;
                default:
                  this.props.InspoBlogs[i].topLink = "/im4reactrepo/W"+i;
                  this.props.InspoBlogs[i].prevLink = "/im4reactrepo/W"+prev;
                  this.props.InspoBlogs[i].nextLink = "/im4reactrepo/W"+next;
                  break;
              }
      
          }

          this.props.InspoBlogs[2].subheading='Code Art Intro';
          this.props.InspoBlogs[3].p1 = "I really enjoyed the lecture videos as I felt it provided a very detailed insight into the fundamentals of JavaScript. The videos were long, which I loved as concepts were not rushed and multiple examples as well as variations were provided. The only technical questions I have are related to ordering the blog posts from the mostly recently viewed to latest (as I tried to code along to replicate it but it did not work for me).";
          this.props.InspoBlogs[3].p2 = `I love how broad web art is, I feel that it allows everyone to engage with a specific niche in a way that is both creative and specific to who they are. Areas, that most interest me, are those which include code art and software art as I think that is an area I would like to explore. I was interested by how the readings explore how the movement from desktop to mobile device as the primary means for accessing the internet, as well as Apple's disregard for flash as the reason behind flash's downfall. An interesting point made by McNamara, was how she hoped that our web history won’t be erased" (2020). I found this interesting because the internet tends to be considered a place where nothing is erasable and everything you post is almost given an infinite lifespan. However, the demise of flash, has at the least shown people, that 'original' artworks may not always be supported on the internet. Instead we may only be able to rely on supported copies to get an essence of what the original was like.`;
          this.props.InspoBlogs[3].p3 = `Another side to the way web history is recorded, is how files are organised and updated, Ann Armstrong, an architect battling with the upkeep and maintenance of architectural repositories suggests that records “should be organised with an archivist in mind” (Armstong, A., E., 2006). This implies that the ordinary user may not be able to find internet artworks as intuitively as they could before. However, the role of an archivist solely dedicated to the maintenance and safe online storage of internet artwork could be critical to ensuring that online equivalents to the ‘Mona Lisa’ are no longer damaged beyond repair due to bad upkeep.`;
          this.props.InspoBlogs[3].references = 'References';
          this.props.InspoBlogs[3].citation = `HyperAllergic (2020) RIP Adobe Flash: Five Takeaways About the Plugin's Legacy in Net Art. Available at: https://hyperallergic.com/609682/rip-adobe-flash-five-takeaways-about-the-plug-ins-legacy-in-net-art/. Accessed: 23 June 2023`;
          this.props.InspoBlogs[3].citation2 = `ARMSTRONG, R. E. A. (2006) Art Documentation: Journal of the Art Libraries Society of North America. Architectural Archives/ Archiving Architetcture: The Digital ERA 25 (2), Fall:12-17.`;

          this.props.InspoBlogs[4].subheading='Conventions';
          this.props.InspoBlogs[4].p1= `Conventions do not lay out a set of rules for how one must live their life, but rather a set of expectations on how we view each other and act ourselves, in most aspects of everyday life. It “figures conspicuously in many of our activities” (Davidson, 1984:2). In Donald Davidson’s paper, ‘Communication and Convention’ (1984) , he focuses on the use of convention in language and how that relates to truth telling as well as how others decipher the speaker’s mood. In this mini-essay I will be using the same principles highlighted in Davidson’s paper and Mailloux’s, ‘Convention and Context’ (1983) to explore how convention is created and functions within the realm of software and website development.`;
          this.props.InspoBlogs[4].p2=`The creation of a convention involves the critical process of repetition, in which a certain action is performed consistently until it is viewed as the norm. Prior to repetition, there is the “preconventional shock value”(Mailloux, 1983:399). This shock value causes disruption in the medium by presenting a new practice in place of a previous normality. An example of this in software development would be the use of Aritfical Intelligence (AI). AI is defined as the ”simulation of human intelligence processes by machines, especially computer systems” (TechTarget, 2023). AI was initially seen as a tool for developers or engineers to speed up the process of development, gathering data and other professional engineering processes. However, over time through the mechanism of repetitive use, AI has become more accessible for the public. This accessibility can be seen in terms of cheaper prices and how much more user-friendly the presentation of AI has become. An example of the ordinary use of AI can be seen in the assistance of NotionAI. Notion was originally a note-taking website/application which has recently begun providing AI as a feature for users. This feature prompts users to insert a prompt, or ask AI to extend something they have already written or even ask it a question.`;
          this.props.InspoBlogs[4].p3=`In conclusion, conventions cannot determine how one would act but rather lays down expectations for how one could act. The use of conventions is prevalent across all industries in every day life. However, the creation and sustenance of a convention is highly dependent on repetition regardless of where/what industry that convention is being implemented.`;
          this.props.InspoBlogs[4].p4=`In terms of the technical lesson, I found it easy to code along, and did not have any issues implementing the provided API.`;
          this.props.InspoBlogs[4].references='References';
          this.props.InspoBlogs[4].citation=`BURNS, Ed. (2023) What is Artificial Intelligence (AI) ?. Available at: https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence (Accessed: 25 March 2023).`;
          this.props.InspoBlogs[4].citation2=`DAVIDSON, D. 1984. Communication and Convention. Springer 59 (1), April: 3-18.`;
          this.props.InspoBlogs[4].citation3=`MAILLOUX, S. 2015. Convention and Context. The Johns Hopkins UNIVERSITY PRESS 14 (2), Winter: 399-408.`;

          this.props.InspoBlogs[5].subheading="Fetch JSON Lectur Reflection";
          this.props.InspoBlogs[5].p1=`The lecture explanations were detailed and concise. Lucky explains concepts of promises, and (a)/synchronous tasks well. He makes clear connections between the front-end and how data handling works in conjunction with the back end which makes it much easier to conceptualize how these technologies work together. `;
          this.props.InspoBlogs[5].p2=`In terms, of developing my internet artwork, I limited the size of the canvas to a set 500px by 500px instead of making it depend on the size of the device. As a result, the user cannot draw up to the edge of the set canvas width.`;
          this.props.InspoBlogs[5].p3=`In the future, I would like to implement an undo and redo feature. Where users can make use of the undo feature as they would a rubber. As completely clearing the canvas appears unforgiving towards the user’s mistakes. Another idea I had to expand this artwork, would be store all users’ drawings on a database, so that when the next user’s load the website they can see what previous people have drawn and then add on to it.`;
          this.props.InspoBlogs[5].prevLink=`/im4reactrepo/W4`;
          this.props.InspoBlogs[5].topLink=`/im4reactrepo/W5`;
          this.props.InspoBlogs[5].nextLink=`/im4reactrepo/W8`;

          this.props.InspoBlogs[8].subheading="Reflection on React.js"; 
          this.props.InspoBlogs[8].p2="I have been working through the two course crashes from week 8. The first one being a note taking app and the other a website which allows users to interact with the IMDB API. Working through these courses has given me an in-depth analysis into the differences between JavaScript and React. The main differences that I have noticed, is how react combines HTML and JS into one .js file. JavaScript elements are embedded within HTML tags e.g. <h1>{variableName}</h1>. I found this made debugging a lot easier, because I spent less time trying to find which lines of JavaScript were linked to corresponding HTML elements. I also found the component structure of react interesting, as it replaces redundant code with reusable components. For example, instead of adding in a header on each page, I can reuse a header I have created in the form of a Header component.";
          this.props.InspoBlogs[8].p3=`Reflection on Theory`;
          this.props.InspoBlogs[8].p4=`The structure of one’s personal user interface for their application or product is a combination of their aesthetic goals and universal symbolization (Hassenzahl & Tractinsky, 2006). Symbolization is heavily based on the user’s previous experiences in relation to other technologies. However, to design a UI based on previous experiences solely can be repetitive and limit creativity. The other option is for a designer to create their own symbols, however this is frustrating for the user, as upon arrival to the website they are most likely to be confused by these new symbols. This “preconventional shock value” (Mailloux, 1983) arises when a convention in a medium is replaced by an innovation. Papanek defines design as the “conscious and intuitive effort to impose meaningful order” (1984). It becomes the prerogative of the designer to ensure that the system teaches the user what the symbols mean as they user traverses through the website. The designer must create a design language which provides minimal, yet continual feedback (UXPin, 2022) to clearly communicate what each symbol stands for.`;
          this.props.InspoBlogs[8].p5=`Another factor that must be considered when designing and implementing a user interface is the experience it will create for the user. The concept that a user interface can possibly affect the user’s emotions, means that the way an interface is designed can result in positive or negative emotional outcomes depending on how well structured the website is in relation to the design goals of the programmer. “A single negative interaction can have a significant negative impact” (Hassenzahl & Tractinsky, 2006) therefore any parts of the website which do not communicate well and are frustrating for the user may overshadow positive experiences omitted from other sections of the website. It should also be noted, that even though one may design for a specific emotion, they do not necessarily have that much control over their user’s emotions (Hassenzahl & Tractinsky, 2006). A designer can only contextualise the emotion, they are planning for the user’s experience.`;
          this.props.InspoBlogs[8].references='References';
          this.props.InspoBlogs[8].citation=`HASSENZAHL, M. & TRACTINSKY, N. 2006. User research – a research agenda. Behaviour & Information Technology 25(2) 91-97.`;
          this.props.InspoBlogs[8].citation2=`MAILLOUX, S. 2015. Convention and Context. The Johns Hopkins UNIVERSITY PRESS 14 (2), Winter: 399-408.`;
          this.props.InspoBlogs[8].citation3=`PAPANEK, V. 1984. Design for the real world. United Kingdom: Thames $ Hudson Ltd.`;
          this.props.InspoBlogs[8].prevLink=`/im4reactrepo/W5`;
          this.props.InspoBlogs[8].topLink=`/im4reactrepo/W8`;
          this.props.InspoBlogs[8].nextLink=`/im4reactrepo/W9`;

          this.props.InspoBlogs[9].subheading = "Code Bias";
          this.props.InspoBlogs[9].p1="Theory Reflection";
          this.props.InspoBlogs[9].p2="In this blog, I will be examining code bias. Code bias can be seen as the way in which people who create code pass their own implicit biases into the code they produce and how this bias is further emphasized when developers are mainly sourced from similar demographics. As hiring people with only a specific type of experience and then expecting them to produce a product which is non-biased for users coming from all types of diverse background will most likely lead to some users having more complications than others."
          this.props.InspoBlogs[9].p3=`The role of programmer from its origin, was considered a feminine role. A programmer position was largely advertised as a clerical job, thus resulting in a predominantly female field. Femineity in this case also refers to low wage, low status and low skilled professions. The initial role of a programmer was more so seen as a type of administration work as opposed to that of an engineer.`
          this.props.InspoBlogs[9].p4=`Initially the job of a software developer was separated into two jobs. One who planned the code, this was typically a highly paying, well respected job, typically given to a man and another who implemented the code, i.e., seen as feminized, clerical work. The implementer was seen as simply translating the thoughts of the planner into a form which could be understood by the computer. As computers became more accessibke to the general public and not just specialists. The demand for developers grew, and the complexity of the software required to run on these machines also increased. At this point, a “new found appreciation for computer programmers, […] increasing demand […] accompanied by an equally dramatic rise in their salaries” (Ensmenger, 2015) encouraged companies to reframe the role of a programmer as a less feminized position. It encouraged companies to search for people who worked better with machines than people, resulting in a bias for men, as opposed to women who tend to considered as natural caregivers. The role of programmer was converted into a masculine dominated industry through the use of advertising and better job conditions.`
          this.props.InspoBlogs[9].p5=`“Programming languages are languages” (Geyser, 2022), as a result they programs are susceptible to “invisible programming” (Moor, 1985). Invisible programming is embedded within a computer program. It can be both intentionally placed by the developer or unintentional. An example of unintentional code bias would be Google’s AI recognizing black people as gorillas. Bugs like these arise from decisions made within code, which reflect on how the programmer’s smaller decisions can create much larger problems when the application is released in a large scale environment. Invisible bias is dependent on who the developers are behind the program and explains why we need diverse programmers from all paths of life. As how one understands the world, is how they will code. Ideally, the people who requires the systems, should be the ones who code the systems, as they would have the best understanding of the system requirements.`
          this.props.InspoBlogs[9].p6=`Dev Blog `
          this.props.InspoBlogs[9].p7=`This week, I focused on producing reusable components. I enjoy the fact that with React.js, I am not recreating as much as code as I was with vanilla JavaScript. It means I spend less time optimizing my code, and more time, trying to structure how each component will work in relation to my entire system. I managed to finish my navigation, this means that the only components I need to do are those, which make up the individual pages. `
          this.props.InspoBlogs[9].p8=`In terms of UI and UX. I have made the homepage of my website a canvas. As I would like users to get an understanding of what my internet art is about from the first interaction they have with the website. I would then like to add animations of line art to replicate how I imagine the user drawing their art on my website. I am also trying to lean into a more minimalistic perspective; therefore, I am hoping to add in the animations in a way which does not clutter my homepage or overwhelm my user.`
          this.props.InspoBlogs[9].references='References'
          this.props.InspoBlogs[9].citation=`ENSMENGER, N. 2015. “Beards, Sandals and Other Signs of Rugged Individualism”: Masculine Culture within the Computing Professions. Scientific Masculinities (January 2015), pp. 38-65.`
          this.props.InspoBlogs[9].citation2=`Geyser, H. (2022) ‘How we code matters’. DevConf, Cape Town.`
          this.props.InspoBlogs[9].citation3=`MOOR, H, J. 1985. What is Computer Ethics? Metaphilosophy 16 (4), Otober: 266-275.`

          this.props.InspoBlogs[10].subheading="Creative Code"; 
          this.props.InspoBlogs[10].p1=`Internet art is made possible using creative coding. Creative code not only allows artists to create their own tools to better optimize their workflow, but it also allows artists to gain a deeper understanding of how coded technology can both enable and reinforce an unjust society. An example provided by Aaron Knochel and Ryan Patton, in ‘If Art Education Then Critical Digital Making: Computational Thinking and Creative Code’ (2015) is how the google search engine, will not always produce the most relevant search result but will prioritise sites which have paid for advertising and present those ones higher up on their hierarchy. Other biases such as invisible programming which are biased decisions made by the programmer, can only be picked up by an outside source (e.g. a different programmer, or someone outside the organization responsible for making the product) who has the ability to understand the code being written, and therefore the decisions being made behind the code. This way, artists can pick up bias’s hiding behind the functionality of a piece of code. As “code not only describes the work, it produces it” (Hertz, 2009). “Artists perform the role of innovators by raising questions to the accepted function of society [… i]ndividuals abstaining […] from technological society are allowing themselves to be […] uninformed consumers” (Knochel & Patton, 2015). It therefore becomes the prerogative of the modern-day artist, to educate themselves on how invisible systems operate in order to create bias against certain users of technology. However, it is important to note that the code behind these structure can only be examined if the code is open and available for public critique. E.g., open-source software which allows users from all over the world to collaborate on a single project. This encourages diversification through participation and decreases the chance of creating a biased product. `
          this.props.InspoBlogs[10].p2=`There is also a stigma within the art community that “physical touch of the artist’s hand is more authentic and impactful for […] experience” (Knochel & Patton, 2015). However, I would argue that how powerful the experience the artist wants to create is dependent on how the content they are trying to portray works with their chosen medium. For example, a static piece may be more impactful on a static medium such as watercolor. However, if an artist wants to create something which will respond to their viewer’s action, a single watercolor, will most likely not be the most effective medium for the intended experience. Software as a medium allows creators to design for more dynamic experiences (Hertz, 2009).`
          this.props.InspoBlogs[10].p3=`Week 10 Dev Blog`
          this.props.InspoBlogs[10].p4=`For my internet art, my goal is to create a public canvas which can be accessed and worked on by users all over the world. The lecture from this week, ‘properties’ was useful for achieving my internet art goals. I was thinking that if I manage to create a login system, I could use props to store the data of individual users. I could also use props to create a default case scenario. For example, if a user is not logged in, they would not be able to create a collaborative canvas and they would not be able to save their work on the website. They would only be able to download their personal canvas. I could also use props for new users, e.g., instead of the user being shown the last canvas they worked on, they would be taken to a blank canvas with a toggle button (to switch between public collaborative canvas or private).`
          this.props.InspoBlogs[10].references='References'
          this.props.InspoBlogs[10].citation=`HERTZ, P. 2009. Art, Code, and the Engine of Change. Advancing Art & Design. 68 (1.), Spring: 58-75.`
          this.props.InspoBlogs[10].citation2=`KNOCHEL, D, A & PATTON, M. R. 2015. If Art Education Then Critical Digital Making: Computational Thinking and Creative Code. National Art Education Association. 57 (1.), Fall: 21-38.`


          this.props.InspoBlogs[11].subheading="Dev Blog" 
          this.props.InspoBlogs[11].p2="This week I decided to stop This week I decided to stop working on a collaborative 2D canvas. As I felt the idea of a 2D canvas was unoriginal and I wanted to work on a more creative idea which contained an element of gamification to make the experience more enjoyable for users. I considered creating a game; however, I did not want to completely scratch the idea of the canvas that I created in Assignment 1. Instead, I wanted to create a three-dimensional canvas which worked off the idea of dragging and dropping 3d modes into a grid placed on the website. Like games, such as sims. The player would have access to an array of 3D models, in which they can rotate 4 ways and place on the grid. To make my entire website a piece of art as opposed to the one page. The player would be navigating through a ‘house’. In which the index, is the outside/welcome mat. As they travers through the website, they will also be traversing through a home. on a collaborative 2D canvas. As I felt the idea of a 2D canvas was unoriginal and I wanted to work on a more creative idea which contained an element of gamification to make the experience more enjoyable for users"
          this.props.InspoBlogs[11].p3=`For my final prototype, I would like to make the entire website customizable. 3D designs which they design on the canvas could be translated to their corresponding pages. E.g. if the player is designing a library. As they are designing this canvas, the theory/blog post page would change in accordance to the furniture the user has added. (This would replace the collaborative option on my two-dimensional website). I think that allowing the user to change the website changes, would allow the user to interact more meaningfully with the website, thereby increasing the emotional attachment they have to the website. `
          this.props.InspoBlogs[11].p4=`The website would start off as minimal and then progress into the player’s designs, as they drag and drop objects onto the canvas grid. For this prototype I am not going to implement, the ability for the user to change the look of other pages apart from the internet art. I will instead use my own 3d models and design for those pages. I will then implement the ability for them to make customizable changes for my final prototype. If I have time, I will also include sound effects.`


          this.props.InspoBlogs[12].subheading="Can Machines Be Creative?" 
          this.props.InspoBlogs[12].p1="This week’s theory readings questioned the meaning of creativity and whether machines had the ability to be considered creative. I would argue that the computer is not creative, but the programmer behind the code and the artists behind the data fed into the machine are creative. Machines cannot create anything by themselves they are simply input/output systems invented by humans, which read data created by other humans in order to produce a final product. However, the input could also be the output from another machine (although at some point the input would have originated from a human). " 
          this.props.InspoBlogs[12].p2="Cohen argues that creativity does not merely stem from the human’s input but rather the intersection between the human and machine working together to create an output (Audry & Ippolito, 2019). One goal created to measure creativity is the imitation test, however Colton and Wiggins (2012) point out that this could potentially be harmful to the actual artists. This is because, as viewers we tend to project our feelings of the artwork onto the author. Yet, we don’t imagine machines as warm and emotive, we tend to vision them as neutral and cold sometimes even incapable of self-led creativity. Therefore it may be insulting to the artist if the viewer does not correctly identify which artwork they produced."
          this.props.InspoBlogs[12].references='References'
          this.props.InspoBlogs[12].citation=`AUDRY, S & OPPOLITO, J. 2019. Can Artificial Intelligence Make Art without Artists? Asks The Viewer. Arts 8(1): 1-8;`
          this.props.InspoBlogs[12].citation2=`COLTON, S & WIGGINS, A. G. 2012. Computational Creativity: The Final Frontier? Frontiers in Artificial Intelligence and Applications 242:21-26`


          this.props.InspoBlogs[13].subheading = "EthoComuting and Instagram"
          this.props.InspoBlogs[13].p2="For this week, I chose to reflect on’ Ethnocomputing’ (Tedre et. Al., 2006) and ‘The Impact of Instagram in the Works of Emerging South African Artists’ (Xaba et. al. 2021). Ethnocomputing consists of “local systems of computational knowledge” (Tedre et. Al., 2006). The digital divide increases as technology involves, this results in increased information inequality. As people from first worlds have larger and faster access to new technologies and information. Whereas people from third world countries, in which having access to the internet is a luxury as opposed to an expectation are falling further behind. This results in standard technology e.g. phones being developed in first world countries, as well as those countries claiming an unbiased universality about the information they produce. However, “[t]echnology that is best from one point of view is not necessarily best from another” (Tedre et. Al., 2006). An example of this in relation to Instagram, would be how aesthetics are prioritised over data consumption. If one was developing Instagram specifically for a low-speed-data area, then they may have included options to render images at a lower quality or other methods to make data consumption more efficient.  "
          this.props.InspoBlogs[13].p3=`In the case of South African artists using Instagram as a space for collaboration and advertisement of their creative business. If Instagram was contextualised for a South African setting, it may be more financially accessible in terms of advertising. The algorithm does not always show you posts from everyone who follows you, lowering the chance of your artwork being seen, prompting artists to have to pay for advertising. However, changing this algorithm may reduce the amount of times an artists would feel obligated to pay for Instagram adverts just to increase their profile visibility.`
          this.props.InspoBlogs[13].references='References'
          this.props.InspoBlogs[13].citation=`Tedre, M., Sutinen, E., Kahkohen, E. & Kommers, P. 2006. Ethnocomputing: ICT in cultural and social context. Communications of the ACM. 49(1):126-130`
          this.props.InspoBlogs[13].citation2=`Xaba, S., Fang, S., & Shah, D. 2021. The Impact of Instagram in the Works of Emerging South African Artists. Advances in Social Science, Education and Humanities Research. 568:85-89`
          this.props.InspoBlogs[13].prevLink=`/im4reactrepo/W12`
          this.props.InspoBlogs[13].topLink=`/im4reactrepo/W13`
          this.props.InspoBlogs[13].nextLink=`/im4reactrepo/webArt`

          this.props.InspoBlogs[14].heading = "Web/ Neb Art";
          this.props.InspoBlogs[14].p1 = `In this essay, I will be examining the web artwork, ‘Ten Thousand Cents’ by Takashi Kawashima and Aaron Koblin. ‘Ten Thousand Cents’ (2008) is an internet artwork which made use of ten thousand individuals, each paid one cent to draw a small section (1/10 000) of a one-hundred-dollar bill. The total cost of production for this piece and the piece itself is a single one-hundred-dollar bill. Workers were sourced anonymously via Amazon's Mechanical Turk platform. The work is presented online via a static image placed on a website, alongside it is a short 2-minute collage of all ten thousand pieces, being drawn simultaneously. `;
          this.props.InspoBlogs[14].p2 = `Internet Art is art that is created for the internet and is distributed on the internet. “It can be described as art that uses computer network and its content to form the basis for the piece” (Colman, 2004). Internet art also known as web art or neb art can be displayed in the form of various media, a few examples are images, video, sounds, text messages etc. Web art differs from internet on the art, as the latter is a digital copy of art created in the physical form. Whereas internet art intentionally uses the affordances of the internet to facilitate a deeper level of engagement with the user.`;
          this.props.InspoBlogs[14].p3 = `Colman argues that “artists producing work on the internet, approach the internet not as a medium, but as a transmission system for data that potentially stimulates all reproductive media” (2004). Colman demonstrates how internet can be a medium for user interaction. ‘Ten Thousand Cents’ (2008) becomes a medium on which different people, in this case, are following instructions to produce an artwork. The online art collects a group of paid users who become willing participants and provides them a canvas on which to interact. This mode of interaction can be considered, what Colman calls a “transmission system for data” (Colman, 2004), as each worker is producing data which is them combined by Kawashima and Koblin to create a united piece. Essentially the data produced by each worker is processed into communal information. In the latter part of Colman’s statement, she speaks to ‘reproductive media’ which can be considered as the act of “collecting data on experiences” (2004). ‘Ten Thousand Cents’ (2008) is proof of the experience produced by each of the corresponding participants.`;
          this.props.InspoBlogs[14].p4 = `“Internet art tends to make its cultural waves outside of art-world enclaves” (Ippolito. 2002). ‘Ten Thousand Cents’ (2008) could have been physically reproduced and placed in a gallery. However, it’s online presence makes it more accessible for users all over the globe who would not have had the resources to attend one physical gallery’s location. The artwork being online makes it easier to imagine how it was possible for thousands of people who had never met to produce such an identical representation to the original American one-hundred-dollar bill. It also allows all the workers who participated in the painting all over the world, to view the work they were a part of creating.`;
          this.props.InspoBlogs[14].p5 = `Ten Thousand Cents’ (2008) combines ten thousand users from all over the world and instructs them to create one single project without telling a single worker, what the end goal is. Ippolito in his article, ‘Ten Myths of Internet Art’ (2002), points out that “[s]uccessful online works can […] create unique forms of communities consisting of people scattered across the globe” (Ippolito, 2002). This artwork makes use of the internet to gather a group of people in isolation. Even though the workers have laboured together to create a singular project. The work was produced in the worker’s individual spaces as opposed to in one shared space, in the same way a physical work would be produced in. The workers would and probably have never met, despite being linked together by their artwork. Thus, this group becomes a “unique form[] of community” (Ippolito, 2002) in the sense that, they worked together to achieve a common end goal, but the only allowed form of interaction was through the services (in this case Amazon's Mechanical Turk platform) facilitated by the two main artists Kawashima and Koblin. Furthermore, this also speaks to how the internet as medium has increased the potential for connecting with one another online. Although, at the same time can make physical spaces more isolating and therefore, connecting in real life more challenging. This isolation can be seen within ‘Ten Thousand Cents’ (2008), where the internet as a medium allowed the artists to draw boundaries for what is allowed within certain spaces and who is able to enter these spaces.`;
          this.props.InspoBlogs[14].p6 = `Alison Colman speaks to how internet art favours “technological experimentation [and] online interaction” (2004). ‘Ten Thousand Cents’ (2008) experiments with online collaboration. However, interaction is limited in the sense that the interaction comes from the fact that the workers who created the art, are not the ‘artists’ per se. The workers are interacting with what the artist has organized and planned for them, in order to create the final piece. After the piece is finished, the only interaction the viewer has with the piece, is a visual interaction with the finished artwork and a short video collection on how all the individual pieces were made.`;
          this.props.InspoBlogs[14].p7 = `‘Ten Thousand Cents’ (2008) is an art piece which can be considered non-conventional yet makes use of conventional techniques. The way the artwork is put together via user interaction is creatively unusual, however, at the core of the piece, is the artists’ asking users to fill in a small section of the canvas with a digital brush. What makes the piece unusual is that worker’s may not really know what they are painting, however this may be similar to working in any team, where one may not be sure how the overall product will end up, but they know what their role is in the team. `;
          this.props.InspoBlogs[14].p8 = `Another side to the ethical stance about the artwork, ‘Ten Thousand Cents’ (2008), is that the artists did not paint the one-hundred-dollar bill. They simply put together all the pieces. To add on to this, the workers who did put this piece together were not individually credited. Workers also worked together to produce a product they did not know that they were making. Painters were individually hired, meaning that very few workers produced more than one section. As a result, people signed up to create something, not knowing what they were contributing to, or how their work would be used. In fact, they may not have even known that their one section was a part of something bigger and may have thought that their one section was the final product. `;
          this.props.InspoBlogs[14].p9 = `‘Ten Thousand Cents’ (2008) also speaks to how widely spread internet access has affected the economy. We are now in a time, where work has become more accessible to different kinds of people all over the world. Most of the blocks painted were so small that not even a drawing tablet would have been a requirement to participate in this experience. A touchpad, though uncomfortable would have sufficed, especially if the worker was tasked with painting a non-detailed square. The artwork also brings into question, job scarcity and low wages, as it seems time consuming to accept a job which only pays one cent. Especially considering that no square was a solid color, each had some type of line detail, therefore it would have taken a couple of minutes to complete (including time to sign up for job, actual painting took around 10 seconds). Platform labor has encouraged an economy, in which workers feel personally responsible for themselves, more so than in the past. As working participants of platform labor are hired as contract workers and not employees. The onus is then placed on the worker to ensure that they are producing enough profits to have a living wage regardless of the number of hours they are working. As a result, workers are constantly competing with other workers who can produce the same quality of work they can at a lower wage. This becomes more of a challenge for workers living in countries with higher costs of living, as they may be competing with someone whose cost of living is far lower.`;
          this.props.InspoBlogs[14].p10 = `In terms of sustainability and long-term support, ‘Ten Thousand Cents’ (2008) is viewable on a website (http://www.tenthousandcents.com/top.html). The artwork itself is presented as an image composed of ten-thousand smaller images, and there is also an accompanying video which demonstrates a collage of the process behind the creation of the artwork. In terms of displaying the image, it does not rely on any hyperlinks or special technology. This makes it easier to safely store the web art, as it does not rely on any technology which is threatening to not be supported in the near future. However, the accompanying video relies on Adobe Flash which is already out of use. Digital artworks tend to be fragile as technology is ever-changing and innovation is happening at faster rates. New technology can make storing artworks which rely on older technology more difficult. The difficulty increases in cases where instead of trying to maintain an image, as in this case, one is trying to maintain a piece of software which may rely on specific hardware or another specific software. As to maintain a heavily dependent artwork, one may have to code new software, which runs on currently supported technology. Or if it is a hardware issue, an older device may need to be stored safely until the artist is able to figure out how to get the original artwork to function on newer devices. `;
          this.props.InspoBlogs[14].p11 = `This internet art stood out to me because the idea behind this artwork was similar to the prototype, I produced for Assignment 1. For assignment 1, I created an online canvas, where users could draw with different brush thickness and brush sizes. My plan for the final artwork, was to create a collaborative canvas, where users from all over the web could interact with the same canvas, adding and subtracting what they wanted. However, my issue with the interaction was that users could draw over another user’s work, thereby erasing it. ‘Ten Thousand Cents’ (2008) provided an interesting solution, on how to make an interactive piece with thousands of people that did not override anybody else’s work. As each person gets a designated section of the canvas, no-one else can work on another person’s section. Therefore, no-one’s work is privileged or validated over another person’s. In my case, this would mean limiting the number of users who could work on selected canvases and then instantiating a new, blank canvas when an older one was filled.`;
          this.props.InspoBlogs[14].p12 = `In conclusion, in this essay, I defined internet art and how it differs from art on the web. I explored internet art as a medium in relation to my case study ‘Ten Thousand Cents’ (2008). I discussed the ethics of the artwork itself as well as explored the effects platform capitalism has on the workers who participated in creating the artwork. I did this, in order to gain a deeper understanding of how ethical the piece itself it was. it is significant that the artwork is a one-hundred-dollar bill that costs one hundred dollars to make, despite involving over ten thousand people.`;
          this.props.InspoBlogs[14].references = "References";
          this.props.InspoBlogs[14].citation =`COLMAN, A. 2004. Net.art and Net.pedagogy: Introducing Internet Art to the Digital Art Curriculum. Studies in Art Education. 46 (1), Autumn: 61-75.`;
          this.props.InspoBlogs[14].citation2 =`IPPOLITO, J. 2002. Ten Myths of Internet Art. Leornardo. 35 (5), ppp. 485-489.`;
          this.props.InspoBlogs[14].citation3 = `KAWASHIMA, T. & KOBLIN, A. 2008. [Internet Art]. Available at: http://www.tenthousandcents.com/top.html (Accessed 30 April 2023)`;
          this.props.InspoBlogs[14].prevLink = `/im4reactrepo/W13`;
          this.props.InspoBlogs[14].topLink = `/im4reactrepo/webArt`;
          this.props.InspoBlogs[14].nextLink = `/im4reactrepo/W3`;
      

          console.log(this.props.InspoBlogs);
          console.log(this.props.paths);
        }
      
      render()
      {
        return (
      
            <article>
                
                {this.createInspoCards()}
                {this.checkPage()}

                 <IndividualInspoBlogs 
                 heading={this.props.InspoBlogs[this.props.index[0]].heading} 
                 subheading={this.props.InspoBlogs[this.props.index[0]].subheading} 
                 blogLink={this.props.InspoBlogs[this.props.index[0]].blogLink} 
                 img={this.props.InspoBlogs[this.props.index[0]].img} 
                 altText={this.props.InspoBlogs[this.props.index[0]].altText} 
                 link={this.props.InspoBlogs[this.props.index[0]].link} 
                 p1={this.props.InspoBlogs[this.props.index[0]].p1} 
                 p2={this.props.InspoBlogs[this.props.index[0]].p2} 
                 p3={this.props.InspoBlogs[this.props.index[0]].p3} 
                 p4={this.props.InspoBlogs[this.props.index[0]].p4} 
                 p5={this.props.InspoBlogs[this.props.index[0]].p5} 
                 p6={this.props.InspoBlogs[this.props.index[0]].p6} 
                 p7={this.props.InspoBlogs[this.props.index[0]].p7} 
                 p8={this.props.InspoBlogs[this.props.index[0]].p8} 
                 p9={this.props.InspoBlogs[this.props.index[0]].p9} 
                 p10={this.props.InspoBlogs[this.props.index[0]].p10} 
                 p11={this.props.InspoBlogs[this.props.index[0]].p11} 
                 p12={this.props.InspoBlogs[this.props.index[0]].p12} 
                 citation={this.props.InspoBlogs[this.props.index[0]].citation} 
                 citation2={this.props.InspoBlogs[this.props.index[0]].citation2} 
                 citation3={this.props.InspoBlogs[this.props.index[0]].citation3} 
                 references={this.props.InspoBlogs[this.props.index[0]].references} 
                 prevLink={this.props.InspoBlogs[this.props.index[0]].prevLink} 
                 topLink={this.props.InspoBlogs[this.props.index[0]].topLink} 
                 nextLink={this.props.InspoBlogs[this.props.index[0]].nextLink} 
                 />
                
            </article>

        )
        }
      
}
