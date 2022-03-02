import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={classes.account}>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Account;
