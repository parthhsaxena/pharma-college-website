import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
const myTheme = createTheme({
  typography: {
    fontFamily: "Rubik, sans-serif",
  },
});

// Use createRoot and render together
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
