import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Typed from 'typed.js';
import './style/WelcomeSection.css'

function WelcomeSection() {

  particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles-js config loaded');
  });

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Backend Developer", "App Developer"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    };
    const typed = new Typed(".input", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Row className='parallax-container d-flex align-items-center'>
      <div id="particles-js" className='particles-js'></div>
      <Col md={6} className='welcome-section-img d-flex align-items-center order-2 order-md-1'>
        <div className="hero-pic">
          <img src="./profile_img.jpg" alt="profile pic"/>
        </div>
      </Col>
      <Col md={6} className='welcome-section-text order-1 order-md-2'>
        <div className='hero-text'>
          <h5>Hi I'm <span className="input"></span></h5>
          <h1>Mate Szakasits</h1>
        </div>
        <div className="btn-group">
          <a href="#" className="btn1 active">Download CV</a>
          <a href="#contact-section" className="btn1 btn2">Contact</a>
        </div>
        <div className="social">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/m%C3%A1t%C3%A9-szakasits153/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/mate153"><i className="fa-brands fa-github"></i></a>
        </div>
      </Col>
    </Row>
  )
}

export default WelcomeSection