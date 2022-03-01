import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import LoginForm from "./LoginForm";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
