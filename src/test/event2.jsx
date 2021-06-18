// 参考：https://juejin.cn/post/6844903502729183239


// 合成事件，原生事件 混合使用
// 点击Demo： 先打印 dom event， 再打印react event
// 如果在onDOMClick中调用evt.stopPropagation()，只打印 dom event


import React from 'react'
import ReactDOM from 'react-dom'

class Demo extends React.PureComponent {
    componentDidMount() {
        const $this = ReactDOM.findDOMNode(this)
        $this.addEventListener('click', this.onDOMClick, false)
        document.addEventListener("click", (e) => {
            console.log("原生事件：document DOM 事件监听！");
        });
    }

    onDOMClick = evt => {
        // evt.stopPropagation()
        evt.nativeEvent.stopImmediatePropagation()
        console.log('dom event')
    }
    
    onClick = evt => {
        // evt.nativeEvent.stopImmediatePropagation()
        
        console.log('react event')
    }

    render() {
        return (
            <div onClick={this.onClick}>Demo</div>
        )
    }
}

export default Demo
