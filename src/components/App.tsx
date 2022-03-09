import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Signup";
import Videos from "./Videos";

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/videos/:insId" component={Videos} />
          <Route exact path="/quiz/:youtubeId" component={Quiz} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
