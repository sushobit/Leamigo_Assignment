import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
        <header>
        <div className="header">
        <div className="navimagewithname">
            <img className='footer-logo'src="https://png.pngtree.com/png-vector/20220627/ourmid/pngtree-plane-logo-vector-icon-illustration-design-template-png-image_5492566.png"/>
        <Link to="/" className="heading">SDFlY</Link>
       </div>
        <nav className="navigation">
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/booking">Booking</a>
            </li>
            <li>
                <a href="/contacts">Contacts</a>
            </li>
            </ul>
        </nav>
        </div>
        </header>
    
  );
};

export default Header;