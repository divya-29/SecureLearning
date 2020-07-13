import React from 'react';
import CuratorUI from './CuratorUI';
import img2 from './assets/images/curator.jpg';
import './assets/css/curator.css';

const Curator = props =>{
	// render() {
		return(
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
		)
	// }
}

export default Curator;