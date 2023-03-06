import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import Auth from "../pages/auth";
import DataUser from "../pages/dataUser";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/wallet/:id",
    element: <DataUser />,
    errorElement: <Error />,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <Error />,
  },
]);
