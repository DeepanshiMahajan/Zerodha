import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "https://zerodha-frontend-4j8m.onrender.com/login";
};


  // Inline styles
    const styles = {
  profileWrapper: {
    position: "relative",
    marginTop: "20px",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#FFFFFF",
    transition: "0.2s",
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#387ed1",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "14px",
  },
  username: {
    margin: 0,
    fontWeight: "600",
    color: "#333",
    fontSize: "14px",
  },
  dropdown: {
    position: "absolute",
    top: "50px",
    right: "0",
    background: "#1f1f2e",
    borderRadius: "6px",
    overflow: "hidden",
    minWidth: "160px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    zIndex: 1000,
  },
  dropdownItem: {
    padding: "10px 15px",
    color: "white",
    cursor: "pointer",
    margin: 0,
  },
  logout: {
    padding: "10px 15px",
    color: "#ff4d4d",
    fontWeight: "bold",
    cursor: "pointer",
    margin: 0,
  },
};


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

        {/* Profile Wrapper */}
<div style={styles.profileWrapper}>
  <div style={styles.profile} onClick={handleProfileClick}>
    <div style={styles.avatar}>ZU</div>
    <p style={styles.username}>USERID</p>
  </div>


          {isProfileDropdownOpen && (
            <div style={styles.dropdown}>
              <p style={styles.dropdownItem}>My Profile</p>
              <p style={styles.dropdownItem}>Settings</p>
              <p style={styles.logout} onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
