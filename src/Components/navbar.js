import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem,Nav,NavbarToggler,Collapse} from 'reactstrap';
import Carousel from './Carousel';
import logo from '../Assets/logo-opencourse.png';
import '../CSS/App.css';
import { Link , NavLink} from 'react-router-dom';
import Study from './Videos';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';


class Navb extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){


        
        return(
           
              
          
        <div>
            
            <Navbar color="dark" light expand="md" fixed="top">
                {/* < div className="container" > */}
                
                
               
                   <img 
                        alt="LIL"
                        src={logo}
                        width="200"
                        height="50"
                        margin="2px"
                        
                    ></img>
                     <NavbarToggler onClick={this.toggle} />
                 <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" id="nav" navbar >
                                <NavItem style={{margin:"15px"}} ><NavLink to='/'> HomePage</NavLink></NavItem>
                                <NavItem style={{margin:"15px"}}><NavLink to='/Study'> Our Services </NavLink></NavItem>
                                <NavItem style={{margin:"15px"}}> Curators </NavItem>
                                <NavItem style={{margin:"15px"}}><NavLink to='/About'> About Us </NavLink></NavItem> 
                                <NavItem style={{margin:"15px"}} ><NavLink to='/Contact'>Contact Us</NavLink> </NavItem>
                            </Nav>
                            
                            </Collapse>
                            
        </Navbar>
        
        <br></br>
        <br></br>
        <div>

                            
                            </div>
                        
           </div>
          
      );
    }
  }
export default Navb;