// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Wrap the entire app with Router to provide routing context
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
