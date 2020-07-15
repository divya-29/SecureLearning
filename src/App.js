import React, {Component} from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Videos from './Components/Videos';
import Teacher from './Components/teacher';
import Curator from './Components/Curator';
import Videosdemo from './Components/demo';



class App extends Component{

  render(){
    return(
      
      <div>
        <Router>
        <Switch>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/HomePage' component={HomePage}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Study' component={Videos}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/Bel' component={Teacher}/> 
        <HomePage />
        
        
        </Switch>
        </Router>
       
             
      </div>
    

    );
  }    
  }

  export default App;
    