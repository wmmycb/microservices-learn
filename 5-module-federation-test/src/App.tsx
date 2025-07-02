import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { Menu } from "antd";
import "./test";
// const RemoteButton = React.lazy(() => import("remote/Button"));
const RemoteButton2 = React.lazy(() => import("app2/Button"));
const YdHeader = React.lazy(() => import("app2/YdHeader"));

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Basic Host-Remote</h1>
        <h2>Host</h2>
        <React.Suspense fallback="Loading Button">
          {/* <RemoteButton /> */}
          <RemoteButton2 />
          <YdHeader user="123" />
        </React.Suspense>
        <Menu mode="horizontal">
          <Menu.Item key="mail">Navigation One</Menu.Item>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
        <div
          style={{ width: "100%", height: "400px", background: "#fff" }}
          id="container"
        ></div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
