import React, { Component } from 'react';
import '../App.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


let styles = {
  margin: 'auto',
  width: '80%',
 height: '40%'
};
const AutoplaySlider = withAutoplay(AwesomeSlider);


class Carousel extends Component {
    render(){
  return (
    <div style={styles}>
		<AutoplaySlider
    play={true}
    cancelOnInteraction={false} 
    interval={1000}>
			<div style={{
        backgroundColor: 'white'}}>
				<img src="assets/lil1.jpg" alt="lil1" />
			
			</div>
			<div style={{
        backgroundColor: 'white'}}>
        <img src="assets/lil2.jpg" alt="lil2"/>
			
			</div>
			<div style={{
        backgroundColor: 'white'}}>
				<img src="assets/lil4.jpg" alt="lil4"/>
			
			</div>
      </AutoplaySlider>
	</div>

  );
}
}

export default Carousel;