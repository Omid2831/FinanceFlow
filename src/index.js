import React from "react";
import ReactDOM from "react-dom/client";

// importing css 
import "./index.css";
import "./components/card.css";
import "./components/navbar.css";

// importing components 

import NavBar from "./components/NavBar";
import Card from "./components/Card";

// frameworks 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Card/>
  </React.StrictMode>
);
