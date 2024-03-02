import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import ShopCategoriesitemsPage from "pages/ShopCategoriesitemsPage";
import Detailspage from "pages/Detailspage";
import Cartpage from "pages/Cartpage";
import CartFinalPage from "pages/CartFinalPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "shopcategoriesitemspage",
      element: <ShopCategoriesitemsPage />,
    },
    {
      path: "detailspage",
      element: <Detailspage />,
    },
    {
      path: "cartpage",
      element: <Cartpage />,
    },
    {
      path: "cartfinalpage",
      element: <CartFinalPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
