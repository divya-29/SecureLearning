import React, { Component } from 'react';
import './App.css';
//import { render } from '@testing-library/react';
//import { Carousel } from 'react-responsive-carousel';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';


class App extends Component {
  render() {
  return (
  <div>
    <Carousel/>
    <Contact/></div>
 
     
  );
  }
      
}

export default App;
