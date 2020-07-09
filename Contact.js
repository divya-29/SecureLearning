import React, {Component} from 'react';
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillLinkedin} from "react-icons/ai";
import {AiFillMail} from "react-icons/ai";
import '../App.css';

let Contactstyles = {
  marginTop:'10%',
  marginRight:'15%',
  marginLeft:'15%',
  textAlign:'center',
  marginBottom:'10%'
};


class Contact extends Component {
  render() {
    return( <div style={Contactstyles}><div style={{marginBottom:'10%',fontSize:'30px'}}> -- Contact Us --</div><AiFillEnvironment size={100} style={{paddingRight:'10%',paddingLeft:'10%'}} />< AiFillLinkedin size={100} style={{paddingRight:'10%',paddingLeft:'10%'}}/>
    < AiFillMail size={100} style={{paddingRight:'10%', paddingLeft:'10%'}}/>
    </div>
    );
  }
}


export default Contact;