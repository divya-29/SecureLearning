import React, {Component} from 'react';
//import './App.css';
import './About.css';

let Aboutstyles = {
    marginTop:'5%',
    marginRight:'15%',
    marginLeft:'15%',
    textAlign:'center',
    marginBottom:'5%'
  };
  
  
  class About extends Component {
    render() {
      return( <div style={Aboutstyles}><div style={{marginBottom:'2%',fontSize:'30px'}}> -- About Us --</div>
      <div className="container">
      <div className="row">
      <div className="col-sm-4">
  <div className="column">
    <h2>What we are?</h2>
    <p>LIL is simply dummy text of the printing and typesetting industry. LIL has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing LIL passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of LIL.</p>
  </div>
  </div>
  <div className="col-sm-4">
  <div className="column">
    <h2>What we were?</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when 
        looking at its layout. The point of using LIL is that it has a more-or-less normal distribution
         of letters, as opposed to using 'Content here, content here', making it look like readable English. 
         Many desktop publishing packages and web page editors now use LIL as their default model text,
          and a search for 'LIL' will uncover many web sites still in their infancy. Various versions 
          have evolved over the years, sometimes by accident, sometimes on purpose</p>
  </div>
  </div>
  <div className="col-sm-4">
  <div className="column">
    <h2>What we do?</h2>
    <p>There are many variations of passages of LIL available, but the majority have suffered 
        alteration in some form, by injected humour, or randomised words which don't look even slightly 
        believable. If you are going to use a passage of LIL, you need to be sure there isn't anything 
        embarrassing hidden in the middle of text. All the LIL generators on the Internet tend to 
        repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a
         dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>
  </div>
  </div>
</div>
</div>
      </div>
      );
    }
  }
  
  
  export default About
   
  