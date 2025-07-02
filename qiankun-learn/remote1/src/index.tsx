import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyRoutes from "./Routes";
import './index.css'

function render(props: any) {
  const { container } = props;
  ReactDOM.render(<MyRoutes />, document.getElementById("root-cra"));
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root-cra")
      : document.querySelector("#root-cra")
  );
}
