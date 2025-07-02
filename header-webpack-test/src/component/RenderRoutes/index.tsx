import React, { ComponentType, LazyExoticComponent } from "react";
import { Route, Routes } from "react-router-dom";
export type RouteComponent =
  | ComponentType<any>
  | LazyExoticComponent<ComponentType<any>>;

export interface RouteItem {
  path: string;
  index?: boolean;
  component?: RouteComponent;
  element?: React.ReactNode;
  routes?: RouteItem[];
  title?: string;
  name?: string;
}

export const renderRoutes = (routes: RouteItem[]): React.ReactNode => {
  const renderRoute = (route: RouteItem): React.ReactNode => {
    const {
      path,
      component: Component,
      element,
      routes: children,
    } = route;

    // 构建 element：优先用 element，其次 component
    let renderedElement: React.ReactNode = element ?? (Component ? <Component /> : null);

    return (
      <Route
        key={path ?? "index"}
        path={path}
        element={renderedElement}
      >
        {children && renderRoutes(children)}
      </Route>
    );
  };

  return routes.map(renderRoute);
};

export const RenderRoutes = ({ routes }: { routes: RouteItem[] }) => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};
