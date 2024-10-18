// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul>
        <li>
          {/* Home dropdown */}
          <div onClick={toggleDropdown}>
            <Link to="/home">Home</Link>
            {isDropdownOpen && (
              <ul>
                <li>
                  <Link to="/home/about">About</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
