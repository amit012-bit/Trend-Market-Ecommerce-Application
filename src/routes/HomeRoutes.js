

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";

var routes = [
  {
    path: "/trend-market",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/trend-market" />,
  },
  {
    path: "/trend-market/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/trend-market/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
];

export default routes;
