import React, { Component } from 'react';
import logo from './logo-opencourse.png';
import '../App.css';
import counter from './counter';

import { Navbar, NavbarBrand, NavItem,Nav,NavbarToggler,Collapse } from 'reactstrap';

class HomePage extends Component{

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
            
            // <Navbar dark color="secondary">
            // <div className="container">
            //     <img
            //         alt="LIL"
            //         src={logo}
            //         width="150"
            //         height="30"
                    
            //     ></img>
            //     <NavbarBrand href="/">LIL</NavbarBrand>
                
            // </div>
            // </Navbar>

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
                            <Nav className="ml-auto" id="nav" navbar >
                                <NavItem style={{margin:"15px"}} > Homepage </NavItem>
                                <NavItem style={{margin:"15px"}}> Our Services </NavItem>
                                <NavItem style={{margin:"15px"}}> Curators </NavItem>
                                <NavItem style={{margin:"15px"}}> About Us </NavItem> 
                                <NavItem style={{margin:"15px"}}> Contact Us </NavItem>
                            </Nav>
                            </Collapse>
                    
        </Navbar>

                            <counter />
           </div>
      );
    }
  }
  
  
export default HomePage;


// style={{margin:"15px", color:"white"}}