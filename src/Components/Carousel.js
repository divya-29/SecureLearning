import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Qualities from './Qualities';
import lil1 from '../Assets/lil1.jpg';
import lil2 from '../Assets/lil2.jpg';
import lil3 from '../Assets/lil4.jpg';
import '../CSS/Carousel.css';


let styles = {
  margin: 'auto',
  width: '80%',
 height: '40%'
};
const AutoplaySlider = withAutoplay(AwesomeSlider);


class Carousel extends Component {
    render(){
  return (
    <div>
    <div style={styles}>
		<AutoplaySlider
    play={true}
    cancelOnInteraction={false} 
    interval={1000}>
			<div style={{
        backgroundColor: 'white'}}>
				<img className="car " src={lil1} alt="lil1" />
			
			</div>
			<div style={{
        backgroundColor: 'white'}}>
        <img className="car " src={lil2} alt="lil2"/>
			
			</div>
			<div style={{
        backgroundColor: 'white'}}>
				<img className="car " src={lil3} alt="lil4"/>
			
			</div>
      </AutoplaySlider>
	</div>
  <br></br>
  <br></br>
  <Qualities />
  </div>

  );
}
}

export default Carousel;