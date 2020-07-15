import React, { Component } from 'react';
import parents from '../Assets/kid-1.jpg';
import '../CSS/reviews.css';
import Webfooter from './footer';
class Reviews extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        fetch("https://lil-project-1.herokuapp.com/api/testimonials")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                // isLoaded: true,
                items: result.data.testimonials
              });
            }
           
           
          )
      }    
    render(){
        // const  items  = this.state.items.testimonials;
    
   
        const item = this.state.items.map((i) => { 
        return(

            <div >

       
               <div className="col-9 card cardc  card.deck mx-auto ">
                    <div className="hovereffect">
                        <img className="responsivec rounded card-img-top" 
                        src={i.imageUrl} 
                        alt=""
                       style={{height:"331px",
                       width:"497px"}} 
                       >
                            </img>
                             <div className="overlay">
                                <h2>{i.name}</h2>
				                {/* <p>
					                <a href="#">LINK HERE</a>
				                </p> */}
                            </div>
                     </div>
                     <p className="card-text text-justify">
                         <br></br>
                     {i.comment}

                     </p>
                </div>
                </div>
                
                

               
              
               
           


           
        );
    })
    return(
        <div>
            <br></br>
    <br></br>
            <div className="container-fluid">
           <div className="row">
            
            <div className=" example col-md-12 col-12">
            <h1 id="head" >Parents Reviews
            </h1>  
              </div>      
        </div> 
           </div>
           <br></br>
           <br></br>
           <div style={{backgroundColor:"#F4F3F3"}}>
            <br></br>
           <div className="container-fluid">
               <div className="row justify-content-center">
              
                   
                   
                    {item}
            
            </div>
            </div>
        </div>
        </div>
    )
    }
}

export default Reviews;
