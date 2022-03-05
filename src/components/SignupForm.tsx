import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = (): JSX.Element => {
  return (
    <Form autoComplete="off" style={{ height: "500px" }}>
      <TextInput type="text" placeholder="User name" icon="person" />
      <TextInput type="email" placeholder="Email" icon="alternate_email" />
      <TextInput type="password" placeholder="Password" icon="lock" />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
      />
      <Checkbox text="I agree to the Terms &amp; Conditions" />
      <Button type="submit">Submit Now</Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
