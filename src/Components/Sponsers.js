import React, {Component} from 'react';
import './Sponsers.css';
//import $ from "jquery";
import cnbc from "./Assets/cnbc.svg";
import colgate from "./Assets/colgate.svg";
import joint from "./Assets/joint.svg";
import twitter from "./Assets/twitter.svg";


class Sponsers extends Component{
    constructor(){
        super();
        this.state = {
            param : cnbc,
            description : "WAVE platform encourages your Online engagement with the Master Teachers. Revision notes and formula sheets are shared with you, for grasping the toughest concepts. Assignments, Regular Homeworks, Subjective & Objective Tests promote your regular practice of the topics.",
        }
        this.tabValue = this.tabValue.bind(this);
    }

    tabValue(param,description){
        this.setState(prevState => {
            let newState = prevState;
            newState.param = param;
            newState.description = description;
            return newState;
        })
    }

    render(){
        return(
          <div> 
              <center>
                <div id="head-box" className="col-md-8 p-3 fade-in">
                    {
                        this.state.param && this.state.description? 
                        <>
                            <img alt={this.state.param} className="box-img" src={this.state.param}/>
                            <p>
                                {
                                    this.state.description
                                }
                            </p>
                        </>
                        :
                        ""
                    }
                </div>
              </center>
              <div className="row mt-5">
                <div onClick={e => {
                    this.tabValue(cnbc,"WAVE platform encourages your Online engagement with the Master Teachers. Revision notes and formula sheets are shared with you, for grasping the toughest concepts. Assignments, Regular Homeworks, Subjective & Objective Tests promote your regular practice of the topics.")
                }}  className="col-md-3 col-12 company-box">
                    <img alt="cnbc" className="box-img" src={cnbc}/>
                </div>
                <div onClick={e => {
                    this.tabValue(colgate,"Your academic progress report is shared during the Parents Teachers Meeting. Sessions get recorded for you to access for quick revision later, just by a quick login to your account. Interactive approach establishes a well-deserved academic connect between you and Master Teachers.")
                }}  className="col-md-3 col-12 company-box">
                    <img alt="cnbc" className="box-img" src={colgate}/>
                </div>
                <div onClick={e => {
                    this.tabValue(joint,"Vedantu is the first choice of students aspiring to score full marks in their ICSE and CBSE Board exams or to crack any competitive exam like IIT JEE (Mains & Advanced), Kishore Vaigyanik Protsahan Yojana (KVPY), National Talent Search Exam (NTSE),")
                }}  className="col-md-3 col-12 company-box">
                    <img alt="cnbc" className="box-img" src={joint}/>
                </div>
                <div onClick={e => {
                    this.tabValue(twitter," International Math Olympiad (IMO), International English Olympiad (IEO). Hours and Hours of Study with no fun, is a bad idea for you, foreseeing the long run. To ensure that motivation is stirred in the best proportion for your clear understanding, a good number of quizzes and Objective tests like V-Brainer, V-Maths,")
                }}  className="col-md-3 col-12 company-box">
                    <img alt="cnbc" className="box-img" src={twitter}/>
                </div>
              </div>
          </div>
            
      )
    }
}

export default Sponsers