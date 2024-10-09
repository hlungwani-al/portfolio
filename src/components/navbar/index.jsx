import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";
import './styles.scss';
import WeHlungwaniIcon from '../pictures/weHlungwani.png';

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "MY SKILLS",
    to: "/skills",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CERTIFICATES",
    to: "/certificates",
  },
  {
    label: "CONTACT ME",
    to: "/contact",
  },
  {
    label: "BONUS",
    to: "/bonus",
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleMenuItemClick = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={'/'} className="navbar-logo">
            <img src={WeHlungwaniIcon} width={80} alt="We Hlungwani" />
          </Link>
        </div>
        <ul className={`navbar-menu ${toggleIcon ? "active" : ""}`}>
          {
            data.map((item, key) => (
              <li key={key} className="navbar-menu-items">
                <Link className="navbar-menu-items-links" to={item.to} onClick={handleMenuItemClick}>
                  {item.label}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {
            toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
          }
        </div>
      </nav>
      <div className={`overlay ${toggleIcon ? "active" : ""}`} onClick={handleToggleIcon}></div>
    </div>
  );
};

export default NavBar;
