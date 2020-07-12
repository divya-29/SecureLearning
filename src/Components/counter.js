import React, { Component } from 'react';
// import CountUp from 'react-countup';
// import {Helmet} from "react-helmet";
import '../CSS/counter.css'
import $ from "jquery";
import Webfooter from './footer';


// const Demo = props => (
// <div className="application">
//             <Helmet>
//               <script src="./count.js" type="text/javascript" />
//             </Helmet>
            
//         </div>
  
// );


class Counter extends Component{
    componentDidMount(){
        $('.counter-count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    render()
    {
        
        return(
            <div>
                 {/* {Demo} */}
            <div className="counter">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="employees">
                    <p className="counter-count">12</p>
                    <p className="employee-p">Institutes</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="customer">
                    <p className="counter-count">354</p>
                    <p className="customer-p">Subjects</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="design">
                    <p className="counter-count">675</p>
                    <p className="design-p">Topics</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="order">
                    <p className="counter-count">4351</p>
                    <p className="order-p">Courses</p>
                </div>
            </div>
        </div>
    </div>
</div>
      <Webfooter />
        </div>
        );
    }
}


export default Counter;