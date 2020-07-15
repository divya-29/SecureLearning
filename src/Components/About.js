import React, {Component} from 'react';
import Contact from './Contact';
import { DATA } from './data';
import Curator from './Curator';

//import './App.css';


let Aboutstyles = {
    marginTop:'5%',
    marginRight:'15%',
    marginLeft:'15%',
    textAlign:'center',
    marginBottom:'5%'
  };
  
  
  class About extends Component {

    constructor(props){
        super(props);
        this.state ={
            items: {}
        }
        this.load.bind(this)

    }
    load(e) {
        console.log("Hey! i am working");
    }
    componentDidMount() {
        const apiUrl = 'https://lil-project-1.herokuapp.com/api/about';
     fetch(apiUrl)
       .then((response) => response.json())
       .then((data) => {this.setState({
        items: data.data.about
    });
} 
       )
     }

    render() {

        const datas = this.state.items;
                return( 

                    <div >
                    <div id='about' style={{background:'#eaecf0'}}>
                      <br></br>
                    <div style={Aboutstyles}><div style={{marginBottom:'2%',fontSize:'30px'}}> -- About Us --</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                            <h2>What we are?</h2>
                            <p className="text-justify"> { datas.whatWereWe }</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h2>What we were?</h2>
                                <p className="text-justify">{datas.whatAreWe}</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h2>What we do?</h2>
                                <p className="text-justify">{datas.whatWeDo}</p>
                            <br></br>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                    <Curator />
                    </div>
                  );
           
            
        }
      
    }
  
  
  export default About;
   
  