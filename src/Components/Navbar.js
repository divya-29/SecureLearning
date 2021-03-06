import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem,Nav,NavbarToggler,Collapse} from 'reactstrap';
import Carousel from './Carousel';
import logo from '../Assets/logo-opencourse.png';
import '../CSS/App.css';
import Study from './Videos';
import { Router, NavLink } from 'react-router-dom';


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
                
                        {/* <NavbarBrand href="/">LIL</NavbarBrand> */}
                            {/* <NavbarToggler onClick={() => context.toggleNavbar()} />
                            <Collapse isOpen={context.navbarOpen} navbar> */}
                            <div className="d-flex justify-content-end ml-auto">
                            <Nav className="ml-auto " className="topnav" id="nav" navbar >
                                <NavItem style={{margin:"15px", textDecoration:"none", color:'white'}} id="ab"><NavLink to='/HomePage'> Homepage</NavLink> </NavItem>
                                <NavItem style={{margin:"15px", color:'white'}} id="ab"><NavLink to='/Study'> Content</NavLink> </NavItem>
                                <NavItem style={{margin:"15px", color:'white'}} id="ab"> <NavLink to='/Bel'> Our Beliefs and Reviews</NavLink> </NavItem>
                                <NavItem style={{margin:"15px", color:'white'}} id="ab"><NavLink to='/Gallery'>Gallery</NavLink> </NavItem>
                                <NavItem style={{margin:"15px", color:'white'}} id="ab"> <a href='#about'> About Us</a> </NavItem> 
                                <NavItem style={{margin:"15px", color:'white'}} id="ab"> <a href='/Contact'> Contact Us</a></NavItem>
                                <NavItem style={{margin:"15px", color:'white'}} id="ab"> <a href='https://learn-india-learn.herokuapp.com/'> Admin
                                </a></NavItem>
                            </Nav>
                            </div>
                            
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
