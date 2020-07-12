import React, {Component} from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Study from './Components/Videos';
import Navb from './Components/Navbar';
import Carousel from './Components/Qualities';
import Qualities from './Components/Qualities';
import Contact from './Components/Contact';
import Counter from './Components/counter';
import Webfooter from './Components/footer';
import PlayerControlExample from './Components/Player';
import ResponsivePlayer from './Components/Player';
import Video from 'video-react/lib/components/Video';
import Videos from './Components/Videos';
import About from './Components/About';


class App extends Component{

  render(){
    return(
      
      <div>
        <Router>
        <Switch>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Study' component={Videos}></Route> 
        <HomePage />
        
        </Switch>
        </Router>
       
             
      </div>
    

    );
  }    
  }

  export default App;
    