import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem,Nav,NavbarToggler,Collapse} from 'reactstrap';
import Carousel from './Carousel';
import logo from '../Assets/logo-opencourse.png';
import '../CSS/App.css';
import Contact from './Contact';
import { Router } from 'react-router';
import Navb from './Navbar';
import Navbar2 from './Navbar2';

class HomePage extends Component{
    render(){
        return(
           
                <div>
                <Navb />
                <Carousel/>
                </div>
           
      );
    }
  }
export default HomePage;