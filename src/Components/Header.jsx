import React from "react";
import "./Header.css";

const Header = () => {
  const headerItems = [
    "GALLERY",
    "OVERVIEW",
    "HIGHLIGHTS",
    "UNIT PLANS",
    "AMENITIES",
  ];

  return (
    <header className="headerbar">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-card">
          <span className="logo-text">AURELIA</span>
        </div>

        {/* Menu Items */}
        <ul className="header-menu">
          {headerItems.map((item) => (
            <li
              key={item}
              className={`header-item ${item === "GALLERY" ? "active" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="header-actions">
          <button className="brochure-btn">
            Download Brochure
            <span className="pdf-icon">📄</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
