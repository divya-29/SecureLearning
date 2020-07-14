import React from 'react';
import ReactCardFlip from 'react-card-flip';
import img2 from './assets/images/curator.jpg';
import {FaGithub, FaFacebook, FaInstagram, FaGoogle, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import './assets/css/curatorUI-style.css';

class CardFront extends React.Component {
  render() {
    return (
      <div class="container">
	<div class="row">
	  <div class="col-md-4">
	    <div class="my-team">
	      <div class="picture">
	    	<img class="img-fluid" src={img2} width="500px" height="500px"/>
	      </div>
	      <div class="team-content">
		<h3 class="name">Clay Jensen</h3>
		<h4 class="title">Web Developer</h4>
	      </div>
	      <ul class="social">
		<li><a href="#" aria-hidden="true"> <FaGithub/> </a></li>
		<li><a href="mailto:example@gmail.com?Subject=About%20Github%20Profile" target="_top" aria-hidden="true"> <FaGoogle/> </a></li>
		<li><a href="#" aria-hidden="true"> <FaLinkedinIn/> </a></li>
		<li><a href="#" aria-hidden="true"> <FaFacebook/> </a></li>
		<li><a href="#" aria-hidden="true"> <FaInstagram/> </a></li>
		<li><a href="#" aria-hidden="true"> <FaTwitter/> </a></li>
	      </ul>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

class CardBack extends React.Component {
  render() {
    return (<
      <div class="container back-card-body">
	<h2>Secure Learning</h2>
	<p class="p-content">Learn India Learn (LIL) is an initiative of Secure Learning. LIL Learning platform will simplify creation, aggregation and dissemination / delivery of high quality, curated digital content in English, Hindi and other Vernacular Indian languages across multiple channels and devices.</p>
      </div>
    );
  }
}


class CuratorUI extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className='fornt-card' onClick={this.handleClick}>
		  <CardFront/>
		</div>
        <div className='back-card' onClick={this.handleClick}>
			<CardBack/>
		</div>
      </ReactCardFlip>
    )
  }
}

export default CuratorUI;
