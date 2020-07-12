import React, { Component } from 'react';
import Navb from './Navbar';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import '../CSS/video.css';
import ResponsivePlayer from './Player';
import vid from '../Assets/video.mp4';


class Videos extends Component{
	
    render(){
		const n=8;
        return(
           
            <div style={{background: '#D3D3D3'}}>
                <Navb />
				<div className="container" >
					<div className="row">
						<div className="eg col-12">
							<h1 id="title">
								Study Material
							</h1>
						</div>
						 </div>
				</div>
                <div class="container">
					<div className="row sizing">
						<div className="col-md-4 col-sm-12">
							<video controls>
							<source src={vid} type="video/mp4"></source>
							<source src={vid} type="video/webm"></source>
							<p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
							</video>
							<div>
							<p className="textstyle">Structure of Atom</p>
							</div>
						</div>
						<br></br>
						<div className="col-md-4 col-sm-12" >
							<video controls>
							<source src={vid} type="video/mp4"></source>
							<source src={vid} type="video/webm"></source>
							<p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
							</video>
						</div>
						<div className="col-md-4 col-sm-12">
							<video controls>
							<source src={vid} type="video/mp4"></source>
							<source src={vid} type="video/webm"></source>
							<p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
							</video>
						</div>
						
					</div>
					
				</div>
            </div>
            
        );
    }
}
export default Videos;