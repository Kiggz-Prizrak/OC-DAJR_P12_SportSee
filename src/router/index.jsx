import React from "react";

import { Outlet, createBrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
const Root = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
