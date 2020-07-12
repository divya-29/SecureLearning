import React, {Component} from 'react';
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillLinkedin} from "react-icons/ai";
import {AiFillMail} from "react-icons/ai";
import '../App.css';
import Counter from './counter';
import Navb from './Navbar';

let Contactstyles = {
  marginTop:'1%',
  marginRight:'15%',
  marginLeft:'15%',
  textAlign:'center',
  marginBottom:'5%'
};


class Contact extends Component {
  render() {
    return( 
      <div >
       <Navb />
    <div style={Contactstyles} >
      <div style={{marginBottom:'5%',fontSize:'30px'}} id="contact"> 
    -- Contact Us --
    </div><AiFillEnvironment style={{paddingRight:'10%',paddingLeft:'10%', width:'30%', height:'35%'}} />
    < AiFillLinkedin style={{paddingRight:'10%',paddingLeft:'10%',width:'30%', height:'35%'}}/>
    < AiFillMail style={{paddingRight:'10%', paddingLeft:'10%',width:'30%', height:'35%'}}/>
    </div>
    <Counter/>
    </div>
    );
  }
}


export default Contact;