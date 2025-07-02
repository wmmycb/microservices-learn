import ReactDOM from "react-dom/client";
import YdHeader from "./component/YdHeader";
import { styleTags } from "./utils/style-loader";

class YdElement extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  // 对attribute的参数进行监听——注：attribute的名字不能有驼峰
  static get observedAttributes() {
    return ["userinfo", "issearch", "system"];
  }
  // 初始化
  connectedCallback() {
    this.shadow.append(...styleTags);
  }
  attributeChangedCallback() {
    this.createDom();
  }
  createDom() {
    const isSearch = this.getAttribute("issearch") || "1";
    const root = ReactDOM.createRoot(document.getElementById("root")!);
    root.render(<div>
      <YdHeader
        isSearch={isSearch === "1"}
      />
    </div>);
  }
}

const ydTagName = "yd-header";

if (!window.customElements.get(ydTagName)) {
  // prevent rerunning on hot module reloads
  // register to be rendered in place of every <evil-plan> tag
  window.customElements.define(ydTagName, YdElement);
}
