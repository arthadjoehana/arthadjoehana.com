import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import emailjs from 'emailjs-com';
import './Projects.css'
import './Home.css';

function Home(){
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_0ksenvs', 'template_ivdutnc', e.target, 'user_iUY4928oZrNJS2Jc01VeP')
          .then((result) => {
              alert("Message Sent.");
          }, (error) => {
              alert("Message failed to send.");
          });
      }
return (
<div>

    <div className="header">
      
        <div className="header-text">
          <h1><span>I'm</span> <span className="name">ARTHA</span></h1>
          <h2><span>Junior</span> <span>Full</span> <span>Stack</span> <span>developer</span></h2>
        </div>

        <div className="header-button">
          <a className="header-button-link" href="#projects">
            <button>View my projects</button>
          </a> 
        </div>

    </div>

    <div className="projects">
      <div className="projects-title title" id="projects">My projects</div>
      <AliceCarousel disableButtonsControls mouseTracking>

        <div className="projects-slider">
          <div className="slider-1"></div>
          <button>
            <h2>Go to project</h2>
          </button>
        </div>

        <div className="projects-slider">
          <div className="slider-2"></div>
          <button>
            <h2>Go to project</h2>
          </button>
        </div>

        <div className="projects-slider">
          <div className="slider-3"></div>
          <button>
            <h2>Go to project</h2>
          </button>
        </div>

      </AliceCarousel>
    </div>

    <div className="contact">
      <div className="contact-title title" id="contact">Contact me</div>
      <div className="contact-area">
        <form onSubmit={sendEmail}>
          <div className="form-title">Via Email...</div>
          <div className="form-group">
            <input type="text" placeholder="Your name" id="username" name="Username"/>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your email" id="email" name="Email"/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" id="subject" name="Subject"/>
          </div>
          <div className="form-group">
            <textarea id="message" placeholder="Your message" name="Message"/>
          </div>
          <div className="form-group">
            <button type="submit"><i class="fas fa-paper-plane"></i></button>
          </div>
        </form>
        <div className="profile">
          <div className="profile-title">...or via my profiles :</div>
          <div className="profile-media">
            <div className="media-icon">
              <a href="#about"><i class="fab fa-linkedin"></i></a>
              <a href="#about"><i class="fab fa-google-plus"></i></a>
              <a href="#about"><i class="fab fa-facebook"></i></a>
              <a href="#about"><i class="fab fa-twitter-square"></i></a>
              <a href="#about"><i class="fab fa-instagram-square"></i></a>
            </div>
            <div className="media-text">
              <h4 className="media-name"> on LinkedIn</h4>
              <h4 className="media-name"> on Google+</h4>
              <h4 className="media-name"> on Facebook</h4>
              <h4 className="media-name"> on Twitter</h4>
              <h4 className="media-name"> on Instagram</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="about">
        <div className="about-title title" id="about">About me</div>
        <div className="about-text">
            <p>
            I design and build websites using HTML, CSS and Javascript and various front-end and back-end technologies such as React, NodeJs, Bootstrap, Jquery and MongoDB.
            </p>
            <p>
            I intend to learn coding beyond web development, aiming to someday become a well-rounded programmer able to work in web, softwares, applications and video games.
            </p>
            <p>
            When I'm not coding, I draw mangas or trade in the stock market. Sometimes I play video games.
            </p>
        </div>
        <div className="about-title title">My skills</div>
        <div className="about-skills">
            <div className="about-icons"><i class="fab fa-html5"></i></div>
            <div className="about-icons"><i class="fab fa-css3-alt"></i></div>
            <div className="about-icons"><i class="fab fa-js-square"></i></div>
            <div className="about-icons"><i class="fab fa-react"></i></div>
            <div className="about-icons"><i class="fab fa-node-js"></i></div>
            <div className="about-icons"><i class="fab fa-python"></i></div>
        </div>
    </div>
    
    <div className="footer">
      <div className="footer-text">
        <div className="footer-copyright">Copyright © Artha Djoehana</div>
      </div>
    </div>
    

</div>
);
}

export default Home