import React, { Fragment } from "react";
import signupImg from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";
const Signup = () => {
  return (
    <Fragment>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration imgSource={signupImg} />
        <SignupForm />
      </div>
    </Fragment>
  );
};

export default Signup;
