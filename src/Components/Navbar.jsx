import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="navigation-icon" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <i className="fas fa-bars"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>
      {isOpen && (
        <div className="navigation-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
