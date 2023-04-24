import React from "react";
import classes from "./auth.module.css";
import { useState } from "react";
import { request } from "../../util/request";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../redux/authSlice";
import "./auth.css";
import logo from "../../assets/logo.svg";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        if (username === "" || email === "" || password === "") {
          setError("Fill all fields!");
          setTimeout(() => {
            setError(false);
          }, 2500);
          return;
        }

        const headers = { "Content-Type": "application/json" };
        const body = { username, email, password };
        const data = await request("/auth/register", "POST", headers, body);

        console.log(data);
        dispatch(register(data));
        navigate("/");
      } else {
        if (email === "" || password === "") {
          setError("Fill all fields!");
          setTimeout(() => {
            setError(false);
          }, 2500);
          return;
        }

        const headers = { "Content-Type": "application/json" };
        const body = { email, password };
        const data = await request("/auth/login", "POST", headers, body);
        dispatch(login(data));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="loginMain">
        <div className="login">
          <div className="leftSide">
            <img src={logo} alt="facebook logo" />
            <p className="subTitle">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="rightSide">
            <form className="form" onSubmit={handleSubmit}>
              {isRegister && (
                <input
                  type="text"
                  placeholder="Type username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address or phone number"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="submit" type="submit">
                {isRegister ? "Register" : "Login"}
              </button>

              <a href="http://" target="_blank">
                Forgotten password?
              </a>

              {isRegister ? (
                <p onClick={() => setIsRegister((prev) => !prev)}>
                  Already have an account? Login
                </p>
              ) : (
                <p onClick={() => setIsRegister((prev) => !prev)}>
                  Don't have an account? Register
                </p>
              )}
            </form>

            {error && <div className={classes.error}>{error}</div>}

            <p>
              <a href="http://" target="_blank">
                <strong>Create a Page </strong>
              </a>
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      <div className="lowerSection">
        <footer className="footer">
          <div className="languages">
            <a href="/">English (UK)</a>
            <a href="/">हिन्दी</a>
            <a href="/">اردو</a>
            <a href="/">ਪੰਜਾਬੀ</a>
            <a href="/">বাংলা</a>
            <a href="/">ગુજરાતી</a>
            <a href="/">मराठी</a>
            <a href="/">தமிழ்</a>
            <a href="/">తెలుగు</a>
            <a href="/">മലയാളം</a>
            <a href="/">ಕನ್ನಡ</a>

            <button className="lgBtn">+</button>
          </div>
          <div className="links">
            <a href="/">Sign Up</a>
            <a href="/">Log in</a>
            <a href="/">Messenger</a>
            <a href="/">Facebook Lite</a>
            <a href="/">Watch</a>
            <a href="/">Places</a>
            <a href="/">Games</a>
            <a href="/">Marketplace</a>
            <a href="/">Meta Pay</a>
            <a href="/">Meta Store</a>
            <a href="/">Meta Quest</a>
            <a href="/">Instagram</a>
            <a href="/">Bulletin</a>
            <a href="/">Fundraisers</a>
            <a href="/">Services</a>
            <a href="/">Voting Information Center</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Privacy Center</a>
            <a href="/">Groups</a>
            <a href="/">About</a>
            <a href="/">Create ad</a>
            <a href="/">Create Page</a>
            <a href="/">Developers</a>
            <a href="/">Careers</a>
            <a href="/">cookies</a>
            <a href="/">Ad Choices &#124;</a>
            <a href="/">Terms</a>
            <a href="/">Help</a>
            <a href="/">contact uploading and non-users</a>
          </div>
          <p>Meta &#169; 2023</p>
        </footer>
      </div>
    </>
  );
};

export default Auth;
