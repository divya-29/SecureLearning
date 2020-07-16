import React from 'react';
import '../CSS/Gallery.css';
import { DisappearedLoading  } from 'react-loadingg';
import Navbar2 from './Navbar2';
import Webfooter from './footer';



 
class Gallery2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items:[],
      images: null,
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://lil-project-1.herokuapp.com/api/gallery')
      .then(res => {return res.json();})
      .then(json => {
        console.log(json.data.gallery);
        this.setState({
          isLoaded: true,
          items: json.data.gallery,    })
      });
  }



  render() {

    const { isLoaded, items } = this.state;
    //const data = items.map((gallery)=>{
      if (!isLoaded) {
        return <div><DisappearedLoading /></div>
      }else{
        return (
          <div style={{backgroundColor:'lightgrey'}}>
            <Navbar2/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           <div class="gallerycontainer" style={{backgroundColor:'lightgrey'}}>
           <div className="container-fluid" style={{backgroundColor:'lightgrey'}}>
           <div className="row">
            
            <div className=" example col-md-12 col-12">
            <h1 id="head" >Gallery
            </h1>  
        
              </div> 
                
        </div> 
           </div>
           <div class="gallery">
          
            {items.map(name => (
             
               <img src={ name.imageUrl } alt="" />
            )) }
            
            </div>
            </div>
            <Webfooter/>
          </div>
        );

      }
    

    }

}



export default Gallery2;