import React, { Component } from 'react';
import { Navbar, NavItem,Nav,NavbarToggler,Collapse} from 'reactstrap';
import logo from '../Assets/logo-opencourse.png';
import '../CSS/App.css';
import { Router    , NavLink} from 'react-router-dom';


class Navbar2 extends Component{

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
                <img 
                        alt="LIL"
                        src={logo}
                        width="200"
                        height="50"
                        margin="2px"
                        
                    ></img>
                     <NavbarToggler onClick={this.toggle} />
                 <Collapse isOpen={this.state.isOpen} navbar>
                            <div className="d-flex justify-content-end ml-auto">
                            <Nav className="ml-auto " className="topnav" id="nav" navbar >
                                <NavItem style={{margin:"15px", textDecoration:"none"}} id="a"><NavLink to='/HomePage'>  Homepage </NavLink></NavItem>
                                <NavItem style={{margin:"15px"}} id="a"><NavLink to='/Study'> Our Services</NavLink> </NavItem>
                                <NavItem style={{margin:"15px"}} id="a"><NavLink to='/Bel'>Our Beliefs and Reviews</NavLink> </NavItem>
                                <NavItem style={{margin:"15px"}} id="a"><NavLink to='/Gallery'>Gallery</NavLink> </NavItem>
                                <NavItem style={{margin:"15px"}} id="a"><NavLink to='/Contact'> Contact Us</NavLink> </NavItem>

                            </Nav>
                            </div>
                            
                            </Collapse>
                    
        </Navbar>
                            
           </div>
      );
    }
  }
  
  
export default Navbar2;