import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer__title">Jayawanth Rayakota Harnath</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" 
                    className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://linkedin.com/in/jayawanthrayak" className="footer__social-link" target="_blank">
                <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/JayawanthRh" className="footer__social-link" target="_blank">
                <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className='footer__copy'> 
                &#169; Jayawanth Rayakota Harnath. All Rights Reserved</span>


        </div>
    </footer>

  )
}

export default Footer