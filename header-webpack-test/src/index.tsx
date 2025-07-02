import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./assets/css/index.less";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./App";
import Test from "./Test";
import reportWebVitals from "./reportWebVitals";

/**
 * 处理react tsx中直接使用web components报错问题
 */
interface YdHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  issearch: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "yd-header": YdHeaderProps;
    }
  }
}


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<ConfigProvider locale={zhCN}>
  <Test />
</ConfigProvider>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
