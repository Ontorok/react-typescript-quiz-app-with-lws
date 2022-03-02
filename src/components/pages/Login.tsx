import React, { Fragment } from "react";
import loginImg from "../../assets/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <Fragment>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration imgSource={loginImg} />
        <LoginForm />
      </div>
    </Fragment>
  );
};

export default Login;
