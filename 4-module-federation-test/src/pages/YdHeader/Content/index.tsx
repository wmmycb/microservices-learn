import React, { useState, useCallback, useRef, useMemo } from "react";
import { Row, Col, Menu, Tooltip } from "antd";
import { navData } from "../../../utils/navData";
import "antd/dist/antd.css";
import styles from "./index.module.less";

const Content = ({ user }: { user: string }) => {
  const [menuAct] = useState("");
  const oCanvas = useRef<any>();
  const [error, setError] = useState(false);
  const elem = useRef<HTMLDivElement>(null);
  let contentBox = document.getElementById("content");
  const ctx = useMemo(() => {
    if (oCanvas.current) return oCanvas.current.getContext("2d");
  }, []);
  // 点击跳转路由
  const _handleClickMenu = useCallback((param) => {
    console.log("跳转");
  }, []);
  const onTouchStart = useCallback(
    (ev) => {
      console.log(123);
      if (!contentBox) return;
      let touchC = ev.changedTouches[0]; //拿第一根手指
      //获取手指接触屏幕的坐标 clientX手指相对于屏幕左侧坐标，clientY手指相对于屏幕顶部坐标
      //offsetLeft相对于定位为absolute的父元素的左侧坐标，offsetTop相对于定位为absolute的父元素的顶部坐标，
      // 逐级向上找absolute父级，如果没有这样的父级以body为准
      let x = touchC.clientX - contentBox.offsetLeft; //获取到手指相对于contentBox左侧的坐标
      let y = touchC.clientY - contentBox.offsetTop; //获取到手指相对于contentBox顶部的坐标

      ctx.save(); // 保存当前环境的状态。
      //只留下目标超过源的部分
      ctx.globalCompositeOperation = "destination-out";
      // 设置划线的大小
      ctx.lineWidth = 30;
      // lineCap 属性设置或返回线条末端线帽的样式。 butt	默认。向线条的每个末端添加平直的边缘。
      ctx.lineCap = "butt";
      // lineJoin 属性设置或返回所创建边角的类型，当两条线交汇时。miter	默认。创建尖角。
      ctx.lineJoin = "miter";
      // miterLimit 属性设置或返回最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。
      ctx.miterLimit = 5;
      // 起始一条路径，或重置当前路径。
      ctx.beginPath();
      //只能画线，用线模拟圆
      ctx.moveTo(x, y);
      ctx.lineTo(x + 1, y + 1);
      // 绘制已定义的路径。
      ctx.stroke();
      // 返回之前保存过的路径状态和属性。
      ctx.restore();
    },
    [ctx, contentBox]
  );
  const onTouchMove = useCallback(
    (ev) => {
      if (!contentBox) return;
      let touchC = ev.changedTouches[0]; //拿第一根手指
      //获取手指接触屏幕的坐标
      let x = touchC.clientX - contentBox.offsetLeft;
      let y = touchC.clientY - contentBox.offsetTop;

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 30;
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.miterLimit = 5;
      ctx.lineTo(x + 1, y + 1);
      ctx.stroke();
      ctx.restore();
    },
    [ctx, contentBox]
  );

  if (error) {
    throw new Error("test");
  }

  return (
    <>
      <Row align="middle" id="YdCommonHeader" ref={elem}>
        <Col flex="auto">
          <Menu
            theme="dark"
            mode="horizontal"
            className="navBox"
            selectedKeys={[menuAct]}
            onClick={_handleClickMenu}
          >
            {navData.map((item) => (
              // <Menu.Item key={item.key} className="ydHeaderNavItem">
              <Menu.Item key={item.key} className={styles.ydHeaderNavItem}>
                <Tooltip
                  placement="bottom"
                  title={item.message}
                  getPopupContainer={() => elem.current as HTMLElement}
                >
                  <div>{item.name}</div>
                </Tooltip>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
      <button
        onClick={() => {
          setError(true);
        }}
      >
        error click
      </button>
      <div className={styles.animation}></div>
      <div className={styles.box} id="content">
        <img src={require("../../../logo.svg").default} alt="" width={100} />
        <canvas
          id={styles.signCanvas}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          ref={oCanvas.current}
        ></canvas>
      </div>
    </>
  );
};

export default Content;
