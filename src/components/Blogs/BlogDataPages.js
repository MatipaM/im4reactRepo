import React, { Component } from 'react'
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import { BlogData } from './BlogData';

export default class BlogDataPages extends Component {

        static defaultProps = {

          index:[
            0
          ],
          
        }

        checkPage()
        {

            for(let i =0; i< BlogData.length; i++) //be careful of this indexing!!!
            {
                if(window.location.pathname == (BlogData[i].topLink))
                {
                    console.log("is true");
                    this.props.index[0] = i;
                    console.log(this.props.index[0]);
                    return;
                }
            }
        }
      
      render()
      {
        return (
      
            <article>
                
                {this.checkPage()}

                 <IndividualInspoBlogs 
                 heading={BlogData[this.props.index[0]].heading} 
                 subheading={BlogData[this.props.index[0]].subheading} 
                 blogLink={BlogData[this.props.index[0]].blogLink} 
                 img={BlogData[this.props.index[0]].img} 
                 altText={BlogData[this.props.index[0]].altText} 
                 link={BlogData[this.props.index[0]].link} 
                 p1={BlogData[this.props.index[0]].p1} 
                 p2={BlogData[this.props.index[0]].p2} 
                 p3={BlogData[this.props.index[0]].p3} 
                 p4={BlogData[this.props.index[0]].p4} 
                 p5={BlogData[this.props.index[0]].p5} 
                 p6={BlogData[this.props.index[0]].p6} 
                 p7={BlogData[this.props.index[0]].p7} 
                 p8={BlogData[this.props.index[0]].p8} 
                 p9={BlogData[this.props.index[0]].p9} 
                 p10={BlogData[this.props.index[0]].p10} 
                 p11={BlogData[this.props.index[0]].p11} 
                 p12={BlogData[this.props.index[0]].p12} 
                 citation={BlogData[this.props.index[0]].citation} 
                 citation2={BlogData[this.props.index[0]].citation2} 
                 citation3={BlogData[this.props.index[0]].citation3} 
                 references={BlogData[this.props.index[0]].references} 
                 prevLink={BlogData[this.props.index[0]].prevLink} 
                 topLink={BlogData[this.props.index[0]].topLink} 
                 nextLink={BlogData[this.props.index[0]].nextLink} 
                 />
                
            </article>

        )
        }
      
}
