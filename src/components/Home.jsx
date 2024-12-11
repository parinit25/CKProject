import React, { Fragment } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router";
import "../css/HomePage.css";

const Home = () => {
  const { user, logout } = useAuth();
  if (!user) {
    return (
      <Fragment>
        <p>
          Please Login To Access <Link to="/login">Log in</Link>
        </p>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <nav className="main-header-nav">
        <div className="main-nav-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </div>
        <button className="logout-button" onClick={logout}>
          Log Out
        </button>
      </nav>
      <div className="profile-container">
        <div className="profile-card">
          <h2 className="profile-title">Welcome, {user.message.full_name}!</h2>
          <p className="profile-email">User name: {user.message.username}</p>
          <p className="profile-email">Email: {user.message.email_id}</p>
          <p className="profile-email">
            Country: {user.message.country_row_id}
          </p>
          <p className="profile-email">
            Mobile Number: {user.message.mobile_number}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
