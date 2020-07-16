import React from 'react';
import './Gallery.css';
import { DisappearedLoading  } from 'react-loadingg';



 
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
          <div>
           <div class="gallerycontainer" style={{backgroundColor:'lightgrey'}}>
             <div style={{fontSize:'40px',textAlign:'center',fontFamily:'Arial'}}>Gallery</div>
           <div class="gallery">
          
            {items.map(name => (
             
               <img src={ name.imageUrl } alt="" />
            )) }
            
            </div>
            </div>
          </div>
        );

      }
    

    }

}



export default Gallery2;