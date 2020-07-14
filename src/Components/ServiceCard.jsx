import React from 'react';
import ServiceCardUI from './ServiceCardUI';
import img1 from './assets/images/img1.jpeg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';

const ServiceCard = props =>{
	return(
		<div className="container-fluid d-flex justify-content-center container-fluid-div">
			<div className="row row-div-1">
				<div className="col-md-4 col-md-4-c">
					<ServiceCardUI imgsrc={img1} title='Learn'/>
				</div>
				<div className="col-md-4 col-md-4-c">
					<ServiceCardUI imgsrc={img2} title='India'/>
				</div>
				<div className="col-md-4 col-md-4-c">
					<ServiceCardUI imgsrc={img3} title='Learn'/>
				</div>
			</div>
		</div>
	)
}

export default ServiceCard;
