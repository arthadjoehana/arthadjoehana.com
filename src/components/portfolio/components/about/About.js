import React from 'react';
import './About.css';

function About(){
 
    return (
        <div>
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
        </div>
);
}

export default About;