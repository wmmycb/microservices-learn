import React from "react";
import { RouteProps } from "react-router-dom";
import styles from "./index.module.less";

const BasicLayout: React.FC<RouteProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.box}>
      <div className={styles.main} id="main">
        <h1>BasicLayout</h1>
        {children}
      </div>
    </div>
  );
};

export default BasicLayout;
