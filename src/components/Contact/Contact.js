import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {

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
        <div className="contact">
            <h1>Contact me</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-container">
                    
                    <div className="form-group">
                    <input type="text"  className="form-control" id="name" placeholder="Your name" name="user_name" />
                    </div>

                    <div className="form-group">
                    <input type="email"  className="form-control" id="email" placeholder="Your email" name="user_email" />
                    </div>

                    <div className="form-group">
                    <input type="text"  className="form-control" id="subject" placeholder="Subject" name="subject" />
                    </div>

                    <div className="form-group">
                    <textarea  className="form-control" id="message" placeholder="Your message" rows="5" name="message" />
                    </div>
                
                    <button type="submit" className="submit-btn">Submit</button>  
                </div>
            </form>
        </div>
    );
  }