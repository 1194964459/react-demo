# React 简单模拟实现

目录：
* render
* state 与 setState
* 重新渲染
* 抽取公用类
* ReactDom.render
* props


class AddButton {
  createDOM(domString) {
    const div = document.createElement("div");
    div.innerHTML = domString;
    return div;
  }

  render() {
    this.dom = this.createDOM(`<button>0</button>`);
    this.dom.addEventListener("click", () => console.log("click"), false);
    return this.dom;
  }
}

document.body.appendChild(new AddButton().render());