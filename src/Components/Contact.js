import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import img01 from './assets/images/img-01.png';
import './assets/css/contact.css';
import './assets/css/main.css';
import './assets/css/util.css';
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.css";

class Contact extends React.Component {
  render() {
	return(
		<div class="bg-contact100">
			<div class="container-contact100">
				<div class="wrap-contact100">
					<div class="contact100-pic js-tilt" data-tilt>
						<img src={img01} alt="IMG"/>
					</div>
					<form class="contact100-form validate-form">
						<span class="contact100-form-title">
							Get in touch
						</span>
						<div class="wrap-input100 validate-input" data-validate = "Name is required">
							<input class="input100" type="text" name="name" placeholder="Name"/>
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i aria-hidden="true"><FaUser/></i>
							</span>
						</div>
						<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input class="input100" type="text" name="email" placeholder="Email"/>
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i aria-hidden="true"><FaEnvelope/></i>
							</span>
						</div>
						<div class="wrap-input100 validate-input" data-validate = "Message is required">
							<textarea class="input100" name="message" placeholder="Message"></textarea>
							<span class="focus-input100"></span>
						</div>

						<div class="container-contact100-form-btn">
							<button class="contact100-form-btn">
								Send
							</button>
						</div>
					</form>
					<div class='address'>
						<div class='address-text'>
							<h2>Development Centre</h2>
							<p>H1/27, RICO IT Park, Madri Industrial Area Extn, Near FCI, Udaipur, Rajasthan IN</p>
							<br/><br/>
						</div>
						<div class='map'>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.7998250237445!2d73.74002738834974!3d24.57863980204247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5f8c0f36a35%3A0x3651d6a5d93e302f!2sSecure%20Learning%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1594787730897!5m2!1sen!2sin" width="400" height="300" frameborder="0" ></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Contact;
