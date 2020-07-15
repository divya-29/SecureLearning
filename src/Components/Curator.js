import React from 'react';
import CuratorUI from './CuratorUI';
import img1 from '../Assets/yash.png';
import img2 from '../Assets/kirti.jpg';
import img3 from '../Assets/curator.jpg';
import Contact from './Contact';
import Sponsers from './Sponsers';
import '../CSS/curator.css';

class Curator extends React.Component {
  render() {
	return(
		<div className="container-fluid d-flex justify-content-center main-div">
			<div className="row row-div">
				<div className="col-md-4">
					<CuratorUI imgsrc={img1} name={'Yash Singh'} role={'DevOps Manager'} content={'Curious learner, passionate teacher, not a professional, but a work in progress rather. Working up the ladder, in a nonconforming fashion. Being a thinker and a technology enthusiast, i strive to discover and thus engage myself in practical applications of technology for the betterment of my career and society by leveraging the same applications remodeled in functional usecases for the problem statements i come across.'} />
				</div>
				<div className="col-md-4">
					<CuratorUI imgsrc={img2} name={'Kirti Purbia'} role={'Designer'} content={'Everyday I work to improve myself and my skills which is part of maturing and becoming better at what I do.'} />
				</div>
				<div className="col-md-4">
					<CuratorUI imgsrc={img3} name={'Clay Jensen'} role={'Web Developer'} content={'Curious learner, passionate teacher, not a professional, but a work in progress rather. Working up the ladder, in a nonconforming fashion. Being a thinker and a technology enthusiast, i strive to discover and thus engage myself in practical applications of technology for the betterment of my career and society by leveraging the same applications remodeled in functional usecases for the problem statements i come across.'} />
				</div>
			</div>
		</div>
	)
  };
}

export default Curator;
