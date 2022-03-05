import React from "react";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

type Props = {};

const LoginForm = (props: Props): JSX.Element => {
  return (
    <Form style={{ height: "330px" }} autoComplete="off">
      <TextInput type="text" placeholder="Email" icon="alternate_email" />
      <TextInput type="password" placeholder="Password" icon="lock" />
      <Button type="submit">Submit Now</Button>
    </Form>
  );
};

export default LoginForm;
