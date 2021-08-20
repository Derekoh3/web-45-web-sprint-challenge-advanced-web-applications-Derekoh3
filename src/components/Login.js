import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/colors");
      })
      .catch((err) => {
        setCredentials({
          ...credentials,
          error: "Username or Password not valid.",
        });
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={onSubmit}>
          <input
            placeholder="name"
            data-testid="username"
            value={credentials.username}
            onChange={handleChange}
            name="username"
          />
          <input
            type="password"
            placeholder="password"
            data-testid="password"
            value={credentials.password}
            onChange={handleChange}
            name="password"
          />
          <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">
        {credentials.errorerror}
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