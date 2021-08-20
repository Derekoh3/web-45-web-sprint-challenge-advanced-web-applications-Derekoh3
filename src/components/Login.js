import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = (props) => {

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.username !== "Lambda" || formData.password !== "School") {
      setError("Login information is incorrect");
    }
    axios
      .post("http://localhost:5000/api/login", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form
          className="d-flex flex-column justify-content-center align-items-center p-3"
          onSubmit={handleOnSubmit}
        >
          <input
            name="username"
            placeholder="Username"
            className="mb-2"
            id="username"
            onChange={handleOnChange}
          />
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            className="mb-2"
            onChange={handleOnChange}
          />
          <button type="submit" className="mt-0" id="submit">
            Submit
          </button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"