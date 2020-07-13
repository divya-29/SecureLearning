import React from 'react';
import './assets/css/service-card-style.css';

const ServiceCardUI = props =>{
	return(
		<div className="card text-center card-div">
			<div className="overflow">
				<img src={props.imgsrc} alt="img1" className="card-img-top"/>
			</div>
			<div className="card-body text-dark card-body-div">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text text-secondary card-text-p">
					About Secure Learning
				</p>
				<a href="#" className="btn btn-outline-success">Learn More</a>
			</div>
		</div>
	);
}

export default ServiceCardUI;