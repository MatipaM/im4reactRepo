import React, { Component } from 'react'
import IndividualInspoBlogs from '../IndividualInspoBlogs';
import { DesignData } from './DesignData';
import '../General.css'

export default class DesignPages extends Component {

        static defaultProps = {
          index:[
            0
          ],
          
        }

        checkPage()
        {

            for(let i =0; i< DesignData.length; i++)
            {
                if(window.location.pathname==(DesignData[i].blogLink))
                {
                    console.log("is true");
                    this.props.index[0]=i;
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
                 heading={DesignData[this.props.index[0]].heading} 
                 blogLink={DesignData[this.props.index[0]].blogLink} 
                 img={DesignData[this.props.index[0]].img} 
                 altText={DesignData[this.props.index[0]].altText} 
                 link={DesignData[this.props.index[0]].link} 
                 p1={DesignData[this.props.index[0]].p1} 
                 p2={DesignData[this.props.index[0]].p2} 
                 p3={DesignData[this.props.index[0]].p3} 
                 p4={DesignData[this.props.index[0]].p4} 
                 p5={DesignData[this.props.index[0]].p5} 
                 p6={DesignData[this.props.index[0]].p6} 
                 p7={DesignData[this.props.index[0]].p7} 
                 p8={DesignData[this.props.index[0]].p8} 
                 p9={DesignData[this.props.index[0]].p9} 
                 p10={DesignData[this.props.index[0]].p10} 
                 citation={DesignData[this.props.index[0]].citation} 
                 citation2={DesignData[this.props.index[0]].citation2} 
                 references={DesignData[this.props.index[0]].references} 
                 prevLink={DesignData[this.props.index[0]].prevLink} 
                 topLink={DesignData[this.props.index[0]].topLink} 
                 nextLink={DesignData[this.props.index[0]].nextLink} 
                 />
                
            </article>

        )
        }
      
}
