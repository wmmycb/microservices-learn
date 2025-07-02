import React, { useState, useCallback } from "react";
import { Row, Col, Menu, Tooltip } from "antd";
import { navData } from "../utils/navData";
// import styles from "./index.module.less";

const YdHeader = ({ user }: { user: string }) => {
  const [menuAct] = useState("");
  // 点击跳转路由
  const _handleClickMenu = useCallback((param) => {
    console.log("跳转");
  }, []);
  return (
    <>
      <Row align="middle" id="YdCommonHeader">
        <Col flex="auto">
          <Menu
            theme="dark"
            mode="horizontal"
            className="navBox"
            selectedKeys={[menuAct]}
            onClick={_handleClickMenu}
          >
            {navData.map((item) => (
              <Menu.Item key={item.key} className="ydHeaderNavItem">
              {/* <Menu.Item key={item.key} className={styles.ydHeaderNavItem}> */}
                <Tooltip placement="bottom" title={item.message}>
                  <div>{item.name}</div>
                </Tooltip>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default YdHeader;
