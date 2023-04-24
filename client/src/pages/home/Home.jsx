import React from "react";
import Friends from "../../components/friends/Friends";
import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Navbar />
        <main className={classes.main}>
          <Sidebar />
          <div style={ {
            position: "relative",
            top: "1rem",
            left: "360px",
            right: "360px",
            width: "calc(100vw - 720px)",
            height: "100vh",
            display: "flex",
            justifyContent: "center"
          }}>
            <Posts />
          </div>
          <Friends />
        </main>
      </div>
    </div>
  );
};

export default Home;
