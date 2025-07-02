import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
// import { styleTags } from "../../utils/style-loader";
// import {} from 'styled-components'
import ErrorBoundary from "../../components/ErrorBoundary";

const YdHeader = ({ user }: { user: string }) => {
  const elem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shadowRoot = elem.current?.attachShadow({ mode: "open" });
    if (shadowRoot) {
      // console.log(styleTags);
      ReactDOM.render(
        <ErrorBoundary>
          <Content user={user} />
        </ErrorBoundary>,
        shadowRoot
      );
      //     shadowRoot.append(...styleTags);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={elem}></div>;
  // return <div ref={elem}>{<Content user={user} />}</div>;
};

export default YdHeader;
