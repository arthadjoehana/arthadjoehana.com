import React from 'react';
import emailjs from 'emailjs-com';
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
          <a href="#projects">View my projects</a> 
        </div>

        <div className="header-link">
        <a href="#contact"><i class="fas fa-pen"></i> Contact me</a>
        </div>
    </div>

    <div className="projects" id="projects">
        <div className="project img-1">
          <div className="project-scroll">
            <a href="#projects">&lt;</a>
          </div>
          <div className="project-text">
            <h1>Cryptocurrency tracker API</h1>
            <div className="project-button">
              <a href="#projects">Go to website</a> 
            </div>
          </div>
          <div className="project-scroll">
            <a href="#projects">&gt;</a>
          </div>
        </div>
    </div>

    <div className="contact">
      <div className="contact-area">
        <form onSubmit={sendEmail}>
          <div className="form-title">Contact me</div>
            <div className="form-group">
            <div>
              <input type="text" placeholder="Your name" id="username" name="Username"/>
            </div>
            <div>
              <input type="email" placeholder="Your email" id="email" name="Email"/>
            </div>
            <div>
              <input type="text" placeholder="Subject" id="subject" name="Subject"/>
            </div>
            <div>
              <textarea id="message" placeholder="Your message" name="Message"/>
            </div>
            <div className="">
              <div className="form-buttons">
                <button type="reset" className="erase"><i class="fas fa-eraser"></i></button>
                <button type="submit" className="send"><i class="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          
        </form>

        <div className="profile">
          <div className="profile-title">Social media</div>
          <div className="profile-media">
            <div className="media-elements">
              <a href="https://www.linkedin.com/in/artha-djoehana-883253174/" target="blank"><i class="fab fa-linkedin"></i></a><span>LinkedIn</span>
            </div>
            <div className="media-elements">
              <a href="https://www.youtube.com/channel/UCVz5cUHzDuZ8XTk2J9Y2PRw" target="blank"><i class="fab fa-youtube-square"></i></a><span>Youtube</span>
            </div>
            <div className="media-elements">
              <a href="https://www.facebook.com" target="blank"><i class="fab fa-facebook-square"></i></a><span>Facebook</span>
            </div>
            <div className="media-elements">
              <a href="https://www.twitter.com" target="blank"><i class="fab fa-twitter-square"></i></a><span>Twitter</span>
            </div>
            <div className="media-elements">
              <a href="https://www.instagram.com" target="blank"><i class="fab fa-instagram-square"></i></a><span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="about">
        <div className="about-title" id="about"><span>About me</span></div>
        <div className="about-text">
            <p>
            I design and build websites using HTML, CSS and Javascript and various front-end and back-end technologies such as React, NodeJs, Bootstrap, Jquery and MongoDB.
            </p>
            <p>
            I intend to learn coding beyond web development, aiming to become a well-rounded programmer able to work in web, softwares, applications, video games and cyber-security.
            </p>
            <p>
            When I'm not coding, I draw mangas or trade in the stock market. Sometimes I play video games.
            </p>
        </div>
        <div className="about-title"><span>My skills</span></div>
        <div className="about-skills" id="icons">
            <a href="https://en.wikipedia.org/wiki/HTML" target="blank"><i class="fab fa-html5"></i></a>
            <a href="https://en.wikipedia.org/wiki/CSS" target="blank"><i class="fab fa-css3-alt"></i></a>
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="blank"><i class="fab fa-js-square"></i></a>
            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="blank"><i class="fab fa-react"></i></a>
            <a href="https://en.wikipedia.org/wiki/Node.js" target="blank"><i class="fab fa-node-js"></i></a>
            <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="blank"><i class="fab fa-python"></i></a>
            <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"><span className="no-icon">Bootstrap</span></a>
            <a href="https://en.wikipedia.org/wiki/JQuery"><span className="no-icon">Jquery</span></a>
            <a href="https://en.wikipedia.org/wiki/MySQL"><span className="no-icon">MySQL</span></a>
            <a href="https://en.wikipedia.org/wiki/Git"><span className="no-icon">Git</span></a>
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