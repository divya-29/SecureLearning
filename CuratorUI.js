import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import ReactDOM from 'react-dom';
import './assets/css/curatorUI-style.css';
import img2 from './assets/images/curator.jpg';
import {FaGithub, FaFacebook, FaInstagram, FaGoogle, FaLinkedinIn, FaTwitter} from 'react-icons/fa';


// React component for the front side of the card
class CardFront extends React.Component {
  render() {
    return (
      <div className="card-side side-front">
        <div class="container">
		  <div class="row">
			<div class="col-12 col-sm-6 col-md-4 col-lg-3">
			  <div class="my-team">
				<div class="picture">
				  <img class="img-fluid" src={img2} width="500px" height="500px"/>
				</div>
				<div class="team-content">
				  <h3 class="name">VIRENDRA SINGH</h3>
				  <h4 class="title">Web Developer</h4>
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
      </div>
    );
  }
}

// React component for the back side of the card
class CardBack extends React.Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h2>Secure Learning</h2>
		  <p>Learn India Learn (LIL) is an initiative of Secure Learning. LIL Learning platform will simplify creation, aggregation and dissemination / delivery of high quality, curated digital content in English, Hindi and other Vernacular Indian languages across multiple channels and devices.</p>
        </div>
      </div>
    );
  }
}

// React component for the card (main component)
class CuratorUI extends React.Component {
  render() {
    return (
	  <Flippy
		flipOnHover={false}
		flipOnClick={true}
		flipDirection="vertical"
		ref={(r) => this.flippy = r}
	  >
		<FrontSide>
		  <div className="card-container">
		    <div className="card-body">
			  <CardFront />
		    </div>
		  </div>
		</FrontSide>
		<BackSide>
		  <div className="card-container">
		    <div className="card-body">
			  <CardBack />
		    </div>
		  </div>
		</BackSide>
	  </Flippy>
    );
  }
}


export default CuratorUI;