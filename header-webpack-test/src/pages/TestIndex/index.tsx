import React from "react";
import YdHeader from "../../component/YdHeader";

const TestIndex = () => {
  const [search, setSearch] = React.useState("1");

  return (
    <>
      <h2>yd-header</h2>
      <yd-header
        issearch={search}
      ></yd-header>
      <YdHeader
        isSearch={search === '1'} />
      <button onClick={() => setSearch("0")}>change true</button>
    </>
  );
};

export default TestIndex;
