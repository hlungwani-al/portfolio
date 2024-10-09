import React from "react";
import { Link } from "react-router-dom";
import './styles.scss'

const Home=()=>{
    return (
      <section id="home" className="home">
        <div className="home-text-wrapper">
          <h1>
            Hi, I'm Amukelani,<br />A Full Stack Mastermind
          </h1>
        </div>
        <div className="home-contact-me-about">
          <Link to='/about'>
            <button>Get to Know Me</button>
          </Link>
          <Link to='/contact'>
            <button>Contact Me!</button>
          </Link>
        </div>
      </section>
    );
}
export default Home;