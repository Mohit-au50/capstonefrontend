import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import profile from "../../assets/user.png";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="facebook logo" />
            </Link>
          </div>

          <div className="search">
            <label>
              <span className="ri-search-line"></span>
              <input type="text" id="search" />
            </label>
          </div>

          <div className="social">
            <div>
              <span className="ri-messenger-fill"></span>
            </div>
            <div>
              <span className="ri-notification-2-fill"></span>
            </div>
            <div className="user" onClick={toggleModal}>
              <img src={profile} alt="" />
            </div>
          </div>
        </nav>
        {showModal && (
          <div className="model">
            <span onClick={handleLogout}>logout</span>
            <Link to={`/updateProfile/${user._id}`} className="link">
              Update Profile
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
