import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LivesProvider } from "./components/context/livesContext";
import { EasyModeProvider } from "./components/context/easymodeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EasyModeProvider>
      <LivesProvider>
        <RouterProvider router={router}></RouterProvider>
      </LivesProvider>
    </EasyModeProvider>
  </React.StrictMode>,
);
