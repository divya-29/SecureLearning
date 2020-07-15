import React, { Component } from 'react';
<<<<<<< HEAD
import cap from '../Assets/Capture.JPG';
import '../CSS/teacher.css';
import teach from '../Assets/teacher.JPG';
=======
import cap from './Assets/Capture.JPG';
import './teacher.css';
import teach from './Assets/teacher.png';
>>>>>>> 1cef8bed6f82f83b31d49c2f7463cc608e4d0d65
import Mentors from './mentors';
import Navbar2 from './Navbar2';


class Teacher extends Component{
    render(){
        return(
            <div>
                <Navbar2/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <div className="container-fluid">
           <div className="row">
            
            <div className=" example col-md-12 col-12">
            <h1 id="head" >Our Belief
            </h1>  
        
              </div> 
                
        </div> 
           </div>
<<<<<<< HEAD
           <br></br> 
=======
           <br></br>
           <br></br>
>>>>>>> 1cef8bed6f82f83b31d49c2f7463cc608e4d0d65

         

            <div className="container-fluid">
                <div className="row">
                    <div className=" col-sm-12 col-lg-6 col-md-3">
                        <img
                        id="cap"
                        src={cap}
                        alt="capture"
                        className="responsive">
                        </img>
                    </div>
                    <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                    <div className="col-sm-12 col-lg-6 col-md-3" style={{backgroundColor:"#F4F3F3"}}> 
                        <h2 id="teach">Role of Teacher in Digital Age</h2>
                        <p id="teacher"> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                     </div> 
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                </div>
               
            
            <div className="row">
                    
                    <div className="col-sm-12 col-lg-6 col-md-6" style={{backgroundColor:"#F4F3F3"}}> 
                        <h2 id="teach">Teacher-intergral part of learning process</h2>
                        <p id="teacher"> 

                       To teach is to enliven and empower learners through orchestrated learning experiences, guided expoloration
                       mediated inquiry and iginiting their imagination in making learning relevant for life long.
                       <br></br>
                       <br></br>
                       With great power comes great responsibility. Teachers can be positive influence and can make great 
                       difference in the lives of the students and help them realize their potential.
                        </p>

                     </div> 

                     <div className=" col-sm-12 col-lg-6 col-md-6">
                        <img 
                        id="teach"
                        src={teach}
                        alt="capture"
                        className="responsive">
                        </img>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Mentors/>
            </div>
                
                
            
            
            

        );
    }
}

export default Teacher;