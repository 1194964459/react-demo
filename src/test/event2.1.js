import React from 'react'
import ReactDOM from 'react-dom'

// child_dom
// parent_dom
// child_react
// parent_react

// 若在 child合成事件中 取消冒泡：parent_react 不会被触发
// 若在 child原生事件中 取消冒泡：只会触发child_dom
// 为什么呢？


class Demo extends React.PureComponent {
    componentDidMount() {
        const $parent = ReactDOM.findDOMNode(this)
        const $child = $parent.querySelector('.child')
        
        $parent.addEventListener('click', this.onParentDOMClick, false)
        $child.addEventListener('click', this.onChildDOMClick, false)
    }

    onParentDOMClick = evt => {
        evt.stopPropagation()

        console.log('parent_dom')
    }
    
    onChildDOMClick = evt => {
        // evt.stopPropagation()

        console.log('child_dom')
    }    
    
    onParentClick = evt => {
        console.log('parent_react')
    }

    onChildClick = evt => {
        // evt.stopPropagation()

        console.log('child_react')
    }

    render() {
        return (
            <div onClick={this.onParentClick}>
                <div className="child" onClick={this.onChildClick}>
                    Demo
                </div>
            </div>
        )
    }
}

export default Demo

