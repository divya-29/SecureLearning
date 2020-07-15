import React, { Component } from 'react';
import Navb from './Navbar';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import '../CSS/video.css';
import ResponsivePlayer from './Player';
import vid from '../Assets/video.mp4';
import Navbar2 from './Navbar2';
import Webfooter from './footer';
import { videodata } from './videodata';


class Videos extends Component{
	constructor(props){
        super(props);

        this.state = {
            videodata: []
		}; 
	}
    componentDidMount() {
        const apiUrl = 'https://lil-project-1.herokuapp.com/api/courses';
     fetch(apiUrl)
       .then((response) => response.json())
       .then((data) => {this.setState({
        videodata: data.data.courses
    });
} 
       )
     }
	
    render(){
			const videod = this.state.videodata.map((i)=>{
				return(
					<div>
					<div className="col-md-12 col-sm-12 m-0">
						<video controls>
						<source url={i.videoUrl} type="video/mp4"></source>
						<source src={i.videoUrl} type="video/webm"></source>
						<p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
						</video>
						<div>
						<p className="textstyle">{i.title}</p>
						</div>
					<br></br>
					</div>
					</div>
                    
                );
               
            })
            
		
		return(
			
				<div style={{background: '#D3D3D3'}}>
						<Navbar2 />
						<br></br>
						<br></br>
						<br></br>
						
				<div className="container" >
							<div className="row">
								<div className="eg col-12">
									<h1 id="title">
										Study Material
									</h1>
								</div>
								 </div>
						</div>
						<div class="container-fluid">
							<div className="row sizing justify-content-center">
								{videod}
                                
						</div>
						</div>
						<Webfooter/>
			</div>
			
		)
        
    }
}
export default Videos;