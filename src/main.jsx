import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import React from "react";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
