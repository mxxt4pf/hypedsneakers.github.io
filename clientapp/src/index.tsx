import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReactDOM from "react-dom/client";
import "./clientapp/view/globalstyle.css";
import App from "./clientapp/view/App";
import reportWebVitals from "./reportWebVitals";
import { router } from "./clientapp/router/ReactRouter";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { SaveContextProvider } from "./clientapp/SaveContext/SaveContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SaveContextProvider>
      <RouterProvider router={router} />
    </SaveContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
