import React from "react";
import Form from "./Form";
import TextInput from "./TextInput";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <Form style={{ height: "330px" }} autoComplete="off">
      <TextInput type="text" placeholder="Email" icon="alternate_email" />
    </Form>
  );
};

export default LoginForm;
