import React from "react";
import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
