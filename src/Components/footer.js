import React, { Component } from 'react';
import '../CSS/footer.css';

class Webfooter extends Component{
    render(){
        return(
            
            <footer class="section footer-classic context-dark bg-image foot" id="footer" >
              <br></br>
        <div class="container">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5 ">
              <div class="pr-xl-4" ><a class="brand" href="index.html"><img class="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcset="images/agency/logo-retina-inverse-280x74.png 2x"/></a>
                <p style={{color:'white'}}>We are here to answer any question you may have about LiL Open Course. Reach out to us and we will respond as soon as we can.</p>
                <p style={{color:'white'}} class="rights"><span>©  </span><span class="copyright-year">2018</span><span> </span><span>LIL Adaptive Learning Foundation</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Contacts</h5>
              <dl class="contact-list">
                <dt>Address:</dt>
                <dd>Shraddha Row House No.2, Thakur Complex
                    Kandivali (E), Mumbai-400101, India</dd>
              </dl>
              <dl class="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">support@securelearning.in</a></dd>
              </dl>
              {/* <dl class="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">https://karosearch.com</a> <span>or</span> <a href="tel:#">https://karosearch.com</a>
                </dd>
              </dl> */}
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul class="nav-list">
                <li><a href="/HomePage">HomePage</a></li>
                <li><a href="/Study">Content</a></li>
                <li><a href="/Bel">Our Beliefs and Reviews</a></li>
                <li><a href="/Contact">Contact Us</a></li>
                <li><a href="/Gallery">Gallery</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row no-gutters social-container">
          <div class="col"><a class="social-inner" href="https://www.facebook.com/LearnIndiaLern/"><span class="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div class="col"><a class="social-inner" href="https://www.linkedin.com/company/secure-learning-pvt-ltd/"><span class="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div class="col"><a class="social-inner" href="https://twitter.com/learnindialearn"><span class="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
          <div class="col"><a class="social-inner" href="https://learnindialearn.com/"><span class="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div>
      </footer>
    
        );
    }
}
export default Webfooter;
