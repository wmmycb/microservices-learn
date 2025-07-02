import React, { useState, useCallback } from "react";
import { Row, Col, Menu, Tooltip } from "antd";
import { navData } from "../../utils/navData";
import styles from "./index.module.less";
import "antd/lib/menu/style/index"


interface YdHeaderProps {
  isSearch?: boolean;
}

const YdHeader = (props: YdHeaderProps) => {
  const { isSearch } = props;

  const [menuAct] = useState("");
  // 点击跳转路由
  const _handleClickMenu = useCallback(() => {
    console.log("跳转", isSearch);
  }, [isSearch]);

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
            items={navData}
          >
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default YdHeader;
