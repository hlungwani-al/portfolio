import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
            <div className="social-links">
              <Link to="//www.facebook.com" target="_blank"><FaFacebookF /></Link>
              <Link to="//www.twitter.com" target="_blank"><FaTwitter /></Link>
              <Link to="//www.linkedin.com/in/amukelani-hlungwani-aba489195" target="_blank"><FaLinkedinIn /></Link>
              <Link to="//www.github.com" target="_blank"><FaGithub /></Link>
            </div>
          </div>
    </footer>
  );
};

export default Footer;
