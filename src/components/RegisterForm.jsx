import { Fragment, useState } from "react";
import { Link } from "react-router";

const RegisterForm = () => {
  const [data, setData] = useState({
    full_name: "",
    username: "",
    country_row_id: "",
    mobile_number: "",
    email_id: "",
    password: "",
    referralId: "",
  });

  const registerUserHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://lobster-app-ddwng.ondigitalocean.app/user/register",
      {
        headers: {
          "Content-Type": "application/json",
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const response2 = await response.json();
    console.log(response2);
  };
  return (
    <Fragment>
      <div className="login-form-heading">
        <h2>Register</h2>
        <p>Create Your Company Accounts</p>
      </div>
      <form onSubmit={registerUserHandler}>
        <>
          <input
            placeholder="Full Name"
            type="text"
            name="fullName"
            id="fullName"
            onChange={(e) => setData({ ...data, full_name: e.target.value })}
          />
          <input
            placeholder="User Name"
            type="text"
            name="userName"
            id="userName"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <select
            onChange={(e) =>
              setData({ ...data, country_row_id: e.target.value })
            }
          >
            <optgroup label="Select Country">
              <option value="India" defaultValue="India">
                India
              </option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Sri Lanka">Sri Lanka</option>
            </optgroup>
          </select>
          <input
            placeholder="Mobile Number"
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) =>
              setData({ ...data, mobile_number: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email ID"
            onChange={(e) => setData({ ...data, email_id: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input
            placeholder="Referral ID"
            type="number"
            name="referralId"
            id="referralId"
            onChange={(e) => setData({ ...data, referralId: e.target.value })}
          />
          <button className="login-button" type="submit">
            Submit
          </button>
          <button type="reset" className="login-button">
            Reset
          </button>
          <p className="login-text">
            Have an account? <Link to="/login">Sign in</Link>
          </p>
        </>
      </form>
    </Fragment>
  );
};

export default RegisterForm;
