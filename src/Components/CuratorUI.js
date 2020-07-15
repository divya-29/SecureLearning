import React from 'react';
import ReactCardFlip from 'react-card-flip';
import {FaGithub, FaFacebook, FaInstagram, FaGoogle, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import '../CSS/curatorUI-style.css';

class CardFront extends React.Component {
  render() {
    return (
        <div class="container">
		  <div class="row">
			<div class="col-md-4">
			  <div class="my-team">
				<div class="picture">
				  <img class="img-fluid" src={this.props.imgsrc} width="500px" height="500px"/>
				</div>
				<div class="team-content">
				  <h3 class="name">{this.props.name}</h3>
				  <h4 class="title">{this.props.role}</h4>
				</div>
				<ul class="social">
				  <li><a href="#" aria-hidden="true">
					<FaGithub/>
				  </a></li>
				  <li><a href="mailto:virendrasayla@gmail.com?Subject=About%20Github%20Profile" target="_top" aria-hidden="true"><FaGoogle/></a></li>
				  <li><a href="#" aria-hidden="true"><FaLinkedinIn/></a></li>
				  <li><a href="#" aria-hidden="true"><FaFacebook/></a></li>
				  <li><a href="#" aria-hidden="true"><FaInstagram/></a></li>
				  <li><a href="#" aria-hidden="true"><FaTwitter/></a></li>		  
				</ul>
			  </div>
			</div>
		  </div>
		</div>
    )
  };
}


class CardBack extends React.Component {
  render() {
    return (
	  <div class="container back-card-body">
			  <h2>About Me</h2>
			  <p class="p-content">{this.props.content}</p>
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
		  <CardFront imgsrc={this.props.imgsrc}  name={this.props.name} role={this.props.role}/>
		</div>
        <div className='back-card' onClick={this.handleClick}>
			<CardBack content={this.props.content}/>
		</div>
      </ReactCardFlip>
    )
  }
}

export default CuratorUI;
