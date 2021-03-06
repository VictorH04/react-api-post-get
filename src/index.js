import React from "react";
import ReactDOM from "react-dom";
import "./SASS/base/_base.scss";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
