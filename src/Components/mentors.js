import React, { Component } from 'react';
import ment from '../Assets/mentors.gif';
import '../CSS/mentors.css';
import Reviews from './reviews';

class Mentors extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        fetch("https://lil-project-1.herokuapp.com/api/teammembers")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                // isLoaded: true,
                items: result.data.teamMembers
              });
            }
           
           
          )
      }    
    render()
    {
        const item = this.state.items.map((i) =>{
        return(
            <div className="row">
            
           <br></br>
           <br></br>

           {/* <div className="container-fluid">
               <div className="row " style={{backgroundColor:"#F4F3F3"}}> */}
               
                   <div className="col-sm-3 col-lg-3 col-md-3 margins">
                       <img
                       src={i.imageUrl}
                       className="responsive-class rounded">
                       </img>

                   </div>

               
               <div className="col-sm-9 col-lg-9 col-md-9 mentor margins second mr-auto" style={{backgroundColor:"#F4F3F3"}}> 
                        <h2>
                           {i.name}
                        </h2>
                       <p>
                       {i.description}
                        </p>

                     </div> 
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     </div>
                     
                    

                    
        //    </div>
        //    </div>

        );
        
    })

    return(
        <div> 
        <div className="container-fluid">
           <div className="row">
            
            <div className=" example col-md-12 col-12">
            <h1 id="head" >Our Mentors Belief
            </h1>  
              </div>      
        </div> 
           </div>
            <div className="container-fluid">
            <div className="row " style={{backgroundColor:"#F4F3F3"}}>

                {item}
                </div>

                </div>
                <Reviews />
                </div>
        
    )
}
}


export default Mentors;
