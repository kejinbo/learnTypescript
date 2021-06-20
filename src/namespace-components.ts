namespace Component {
  export class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "我是 header";
      document.body.appendChild(elem);
    }
  }
  export class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "我是 content";
      document.body.appendChild(elem);
    }
  }
  export class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "我是 footer";
      document.body.appendChild(elem);
    }
  }
}
