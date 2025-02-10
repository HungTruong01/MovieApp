import React from "react";
import App from "../App";
import Home from "../pages/Home.jsx";
import ExplorePage from "../pages/ExplorePage.jsx";
import DetailsPage from "../pages/DetailsPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
