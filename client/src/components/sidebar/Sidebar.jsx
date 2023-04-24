import React from 'react'
import "remixicon/fonts/remixicon.css";
import "./sidebar.css"

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <a href="/">
              <span className="ri-home-5-fill"></span>Home
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ri-user-3-fill"></span>User Name
            </a>
          </li>
          <hr />
          <li>
            <a href="/">
              <span className="ri-video-fill"></span>Watch
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ri-store-3-fill"></span>Marketplac
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ri-gamepad-fill"></span>Gaming
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ri-layout-grid-fill"></span>See all
            </a>
          </li>
          <hr />
          <li>
            <a href="/">
              <span className="ri-facebook-circle-fill"></span>Facebook
            </a>
          </li>
          <li>
            <a href="/">
              <span className="ri-team-fill"></span>See all groups
            </a>
          </li>
          <hr />
          <li>
            <a href="/">
              <span className="ri-link-m"></span>See all shortcuts
            </a>
          </li>
        </ul>

        <div className="bottom">
          <a href="/">Privacy</a>&#903;
          <a href="/">Terms</a>&#903;
          <a href="/">Advertising</a>&#903;
          <a href="/">Ad choices</a>&#903;
          <a href="/">Cookies</a>&#903;
          <a href="/">More</a>&#903;
          <p>Meta &#169; 2023</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar