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

        this.state = {
            datas: DATA   
        };
    }

    render() {

        const datas = this.state.datas;
        
            const dataselect = datas.map((i)=>{
                return( 

                    <div >
                    <div id='about' style={{background:'#D3D3D3'}}>
                      <br></br>
                    <div style={Aboutstyles}><div style={{marginBottom:'2%',fontSize:'30px'}}> -- About Us --</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                            <h2>What we are?</h2>
                            <p className="text-justify"> { i.block1 }</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h2>What we were?</h2>
                                <p className="text-justify">{i.block2}</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h2>What we do?</h2>
                                <p className="text-justify">{i.block3}</p>
                            <br></br>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                    <Curator />
                    </div>
                  );
            });
        
            return(
                <div>
                {dataselect}
                </div>
                    
            );
           
            
        }
      
    }
  
  
  export default About;
   
  