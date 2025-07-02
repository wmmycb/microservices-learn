import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: require("../App").default,
    name: "home",
  },
  {
    path: '/test',
    component: require('../pages/Test/index').default,
    name: 'test'
  }
];

const MyRoutes = () => {
console.log(routes)
  return (
    <BrowserRouter
      basename={(window as any).__POWERED_BY_QIANKUN__ ? "/reactApp" : "/"}
    >
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
