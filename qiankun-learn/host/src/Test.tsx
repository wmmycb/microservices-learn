import { registerMicroApps, start, setDefaultMountApp } from "qiankun";

const Test = () => {
  registerMicroApps([
    {
      name: "reactApp",
      entry: "//localhost:3000",
      container: "#container",
      activeRule: '/reactApp',
    },
  ]);

  start();

  return <div id="container"></div>;
};

export default Test;
