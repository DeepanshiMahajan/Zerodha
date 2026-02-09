import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
              <p className={`menu ${selectedMenu === 0 ? "selected" : ""}`}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(1)}>
              <p className={`menu ${selectedMenu === 1 ? "selected" : ""}`}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(2)}>
              <p className={`menu ${selectedMenu === 2 ? "selected" : ""}`}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(3)}>
              <p className={`menu ${selectedMenu === 3 ? "selected" : ""}`}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(4)}>
              <p className={`menu ${selectedMenu === 4 ? "selected" : ""}`}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen && <div className="profile-dropdown">Dropdown Items Here</div>}
      </div>
    </div>
  );
};

export default Menu;
