import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Sepeda from "./pages/FormSepeda.jsx";
import UpdateSepeda from "./pages/UpdateSepeda.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sepeda", element: <Sepeda /> },
  { path: "/sepeda/updatesepeda/:kode_sepeda", element: <UpdateSepeda /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
