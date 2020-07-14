import React, { Component } from 'react';
import parents from './Assets/kid-1.jpg';
import './reviews.css';
class Reviews extends Component{
    render(){
        return(

<div >
            <div className="container-fluid">
           <div className="row">
            
            <div className=" example col-md-12 col-12">
            <h1 id="head" >Parents Reviews
            </h1>  
              </div>      
        </div> 
           </div>
           <br></br>
           
        <div style={{backgroundColor:"#F4F3F3"}}>
            <br></br>
           <div className="container">
               <div className="row cont card.deck">
               <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 card cardc ">
                    <div className="hovereffect">
                        <img className="img-responsive rounded card-img-top" 
                        src={parents} 
                        alt="">

                        </img>
                             <div className="overlay">
                                <h2>Parent 1</h2>
				                {/* <p>
					                <a href="#">LINK HERE</a>
				                </p> */}
                            </div>
                     </div>
                     <p className="card-text text-justify">
                         <br></br>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                     </p>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 card cardc ">
                    <div className="hovereffect">
                        <img className="img-responsive rounded card-img-top" 
                        src={parents} 
                        alt="">

                        </img>
                             <div className="overlay">
                                <h2>Parent 1</h2>
				                {/* <p>
					                <a href="#">LINK HERE</a>
				                </p> */}
                            </div>
                     </div>
                     <p className="card-text text-justify">
                         <br></br>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                     </p>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 card cardc ">
                    <div className="hovereffect">
                        <img className="img-responsive rounded card-img-top" 
                        src={parents} 
                        alt="">

                        </img>
                             <div className="overlay">
                                <h2>Parent 1</h2>
				                {/* <p>
					                <a href="#">LINK HERE</a>
				                </p> */}
                            </div>
                     </div>
                     <p className="card-text text-justify">
                         <br></br>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                     </p>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 card cardc ">
                    <div className="hovereffect">
                        <img className="img-responsive rounded card-img-top" 
                        src={parents} 
                        alt="">

                        </img>
                             <div className="overlay">
                                <h2>Parent 1</h2>
				                {/* <p>
					                <a href="#">LINK HERE</a>
				                </p> */}
                            </div>
                     </div>
                     <p className="card-text text-justify">
                         <br></br>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                     </p>
                     </div>
                </div>
               </div>
           </div>


           </div>
        );
    }
}

export default Reviews;