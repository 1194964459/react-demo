class AddButton {
    constructor() {
        this.state = { num: 0 };
    }

    // // 调用render(), 更新dom
    setState(state) {
        this.state = state;
        this.dom = this.render();
    }

    // changeDom() {
    //     const oDom = this.dom;
    //     this.dom = this.render();
    //     document.body.insertBefore(this.dom, oDom);
    //     document.body.removeChild(oDom);
    // }
    
    // setState(state) {
    //     this.state = state;
    //     this.changeDom();
    // }
    
    handleAdd() {
        const num = this.state.num + 1;
        this.setState({
            num: num
        });
    }

    createDOM(domString) {
        const div = document.createElement("div");
        div.innerHTML = domString;
        return div;
    }
  
    render() {
        this.dom = this.createDOM(`<button id="btn">${this.state.num}</button>`);

        this.dom.addEventListener("click", () => this.handleAdd(), false);

        console.log(this.dom);
    
        return this.dom;
    }
}

document.body.appendChild(new AddButton().render());