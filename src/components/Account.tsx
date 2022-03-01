import React from "react";
import classes from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined cursor-pointer" title="Account">
        account_circle
      </span>
      <span>nasir</span>
      <span className="material-icons-outlined cursor-pointer" title="Logout">
        logout
      </span>
    </div>
  );
};

export default Account;
