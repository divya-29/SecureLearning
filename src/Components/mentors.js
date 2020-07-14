import React, { Component } from 'react';
import ment from '../Assets/mentors.gif';
import '../CSS/mentors.css';
import Reviews from './reviews';

class Mentors extends Component{
    render()
    {
        return(
            <div>
                <br></br>
            <div className="container-fluid">
           <div className="row">
            
            <div className=" example col-md-12 col-12">
            <h1 id="head" >Our Mentors Belief
            </h1>  
              </div>      
        </div> 
           </div>
           <br></br>
           <br></br>

           <div className="container-fluid">
               <div className="row" style={{backgroundColor:"#F4F3F3"}}>
                   <div className="col-sm-3 col-lg-3 col-md-3">
                       <img
                       src={ment}
                       className="responsive-class rounded">
                       </img>

                   </div>

               
               <div className="col-sm-9 col-lg-9 col-md-9 mentor" style={{backgroundColor:"#F4F3F3"}}> 
                        <h2>
                            Mentor 1
                        </h2>
                       <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                     </div> 
                     <br></br>
                     <br></br>
                     </div>
                     
                    

                     <div className="row" style={{backgroundColor:"#F0F8FF"}}>
                   
               
               <div className="col-sm-9 col-lg-9 col-md-9 mentor" style={{backgroundColor:"#F0F8FF"}}> 
                       <h2>
                           Mentor 2
                       </h2>
                       <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                     </div> 
                     <div className="col-sm-3 col-lg-3 col-md-3">
                       <img
                       src={ment}
                       className="responsive-class rounded second">
                       </img>

                   </div>
                   <br></br>
                   <br></br>
                     </div>
                    
                   

                     <div className="row" style={{backgroundColor:"#F4F3F3"}}>
                   <div className="col-sm-3 col-lg-3 col-md-3">
                       <img
                       src={ment}
                       className="responsive-class rounded">
                       </img>

                   </div>

               
               <div className="col-sm-9 col-lg-9 col-md-9 mentor" style={{backgroundColor:"#F4F3F3"}}> 
                       <h2>
                           Mentor 3
                           </h2> 
                       <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                     </div> 
                     <br></br>
                     <br></br>
                     </div>
             
              

              <div className="row" style={{backgroundColor:"#F0F8FF"}}>
                   
               
                   <div className="col-sm-9 col-lg-9 col-md-9 mentor" style={{backgroundColor:"#F0F8FF"}}>
                           <h2>
                               Mentor 4
                               </h2>  
                           <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
    
                         </div> 
                         <div className="col-sm-3 col-lg-3 col-md-3">
                           <img
                           src={ment}
                           className="responsive-class rounded second">
                           </img>
    
                       </div>
                       <br></br>
                       <br></br>
                       </div>
           </div>
           <Reviews />
           </div>

        );
    }
}

export default Mentors;