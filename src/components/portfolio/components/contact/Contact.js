import React from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

function Contact(){
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
    </div>
  );
}

export default Contact