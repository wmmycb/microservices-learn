import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: require("../App").default,
    name: "home",
  },
  {
    path: 'test2',
    component: require('../Test2').default,
    name: 'Test2'
  }
];

const MyRoutes = () => {
  return (
    <BrowserRouter basename="/reactApp">
      <Routes>
        {routes.map((item) => (
          <Route
            path={item.path}
            element={React.createElement(item.component)}
            key={item.name}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
