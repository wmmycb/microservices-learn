import React, { useEffect } from "react";
import "./App.css";
import registerApp, {microApps} from './registerApp'
import YdHeader from "./YdHeader";

// 启动 qiankun

function App() {
  useEffect(() => {
    registerApp(microApps)
  }, [])
  return (
    <div className="App" >
      {/* <YdHeader user='test' /> */}
      <div id="container"></div>
    </div>
  );
}

export default App;
