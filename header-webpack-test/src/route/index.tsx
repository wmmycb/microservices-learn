import React, { Suspense } from "react";
import { RouteItem } from "../component/RenderRoutes";

const routes: RouteItem[] = [
  {
    path: "/",
    component: React.lazy(() => import("../layout/BasicLayout")),
    // routes: [
    //   {
    //     path: "/test",
    //     title: "公用头部测试",
    //     name: "公用头部测试",
    //     exact: true,
    //     component: loadable(() => import("../pages/TestIndex")),
    //   },
    // ],
  },
  {
    path: "/test",
    title: "公用头部测试",
    name: "公用头部测试",
    component: React.lazy(() => import("../pages/TestIndex")),
  },
];

export default routes;
