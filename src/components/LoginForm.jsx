import { Fragment, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    login_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const { user, login } = useAuth();

  const loginUserHandler = async (e) => {
    e.preventDefault();
    const isLoggedIn = await login(userData);
    if (isLoggedIn) {
      navigate("/");
    } else {
      alert("Login failed. Please check your credentials.");
      navigate("/login");
    }
  };
  return (
    <Fragment>
      <div className="login-form-heading">
        <h2>Login</h2>
        <p>Enter Your Account Login Details.</p>
      </div>
      <form onSubmit={loginUserHandler}>
        <>
          <input
            type="text"
            placeholder="Email ID or User name"
            onChange={(e) =>
              setUserData({ ...userData, login_id: e.target.value })
            }
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button className="login-button" type="submit">
            Sign in
          </button>
          <button className="login-button" type="reset">
            Reset
          </button>
          <p className="login-text">
            Don't you have an account? <Link to="/signup">Sign up</Link>
          </p>
        </>
      </form>
    </Fragment>
  );
};

export default LoginForm;
