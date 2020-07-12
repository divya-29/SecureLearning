import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle,Button , CardText, CardBody, CardTitle, CardDeck, Form, Carousel } from 'reactstrap';
import '../CSS/Qualities.css';
import interact from '../Assets/inter.jfif';
import context from '../Assets/learning.jfif';
import extra from '../Assets/learn.jpg';
import easy from '../Assets/teach.jpg';
import Contact from './Contact';
import gif from '../Assets/gif.gif';
import About from './About';

class Qualities extends Component{
    render(){
        return(
            <div>
                <br></br>
                <h1 style={{textAlign:'center', color: '#00688B'}}>Why Learn on LIL?</h1>
                <br></br>
            <div className="container " >
            <div className="row m-1">
            <CardDeck className="mx-auto">
                <Card className="col-md-6 col-lg-3 col-12 card-wrapper" style={{padding:0}} >
            
                <CardImg top src={ interact } alt="Card image cap" className="cardstyle "/>
                
                <CardBody className="CardStyle">
                <CardTitle>Interactive Teaching</CardTitle>
                </CardBody>
                
            </Card>
            <Card className="col-md-6 col-lg-3 col-12 card-wrapper" style={{padding:0}} >
                
                <CardImg top width="100%" src={easy} alt="Card image cap" className="cardstyle"/>
                
                <CardBody className="CardStyle">
                <CardTitle>Easily Accessible</CardTitle>
                </CardBody>
            </Card>
            <Card className="col-md-6 col-lg-3 col-12 card-wrapper" style={{padding:0}}>
                <div>
                <CardImg top src={extra} alt="Card image cap" className="cardstyle"/>
                </div>
                <CardBody className="CardStyle">
                <CardTitle>Pursuant to User</CardTitle>
                </CardBody>
            </Card>
            <Card className="col-md-6 col-lg-3 col-12 card-wrapper" style={{padding:0}}>
                <div>
                <CardImg top src={context} alt="Card image cap" className="cardstyle"/>
                </div>
                <CardBody className="CardStyle">
                <CardTitle>Contextual Learning</CardTitle>
                </CardBody>
            </Card>
            </CardDeck>
            </div>
            <div className="col-lg-9 mx-center mx-auto">  
        <img src={gif} alt="gif" className="responsive" />
            </div>
            </div>
            <About />
        
           
            </div>
          
        );
    }
}

export default Qualities;