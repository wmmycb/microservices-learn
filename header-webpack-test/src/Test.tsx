import React from "react";
import routes from "./route";
import { BrowserRouter } from "react-router-dom";
import { RenderRoutes } from "./component/RenderRoutes";

const Test = () => {
  return (
    <>
      <BrowserRouter>
        <RenderRoutes routes={routes} />
      </BrowserRouter>
    </>
  );
};

export default Test;
