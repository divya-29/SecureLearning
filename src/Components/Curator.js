import React from 'react';
import CuratorUI from './CuratorUI';
import img2 from '../Assets/curator.jpg';
import Contact from './Contact';
import Sponsers from './Sponsers';

const Curator = props =>{
	return(
		<div>
		<div className="container-fluid d-flex justify-content-center main-div">
			<div className="row row-div">
				<div className="col-md-4">
					<CuratorUI imgsrc={img2} />
				</div>
				<div className="col-md-4">
					<CuratorUI imgsrc={img2} />
				</div>
				<div className="col-md-4">
					<CuratorUI imgsrc={img2} />
				</div>
			</div>
		</div>
		<Sponsers/>
		</div>
	)
}

export default Curator;
