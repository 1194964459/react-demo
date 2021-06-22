// 封装一个高阶组件，统计组件渲染时间

import React from 'react'

class Hello extends React.Component{
    // start = null

    // UNSAFE_componentWillMount(){
    //     this.start = Date.now()
    // }

    // componentDidMount(){
    //     console.log('组件渲染耗时： ', Date.now() - this.start)
    // }

    render(){
        return (
            <div>hello {this.props.id}</div>
        )
    }
}

// 由于各个组价都会统计组件渲染耗时时间，因此这块逻辑可以共用
// 封装成高级组件
function withLogger(OldComponent){
    return class extends React.Component{
        start = null

        UNSAFE_componentWillMount(){
            this.start = Date.now()
        }
    
        componentDidMount(){
            console.log('组件渲染耗时： ', Date.now() - this.start)
        }

        render(){
            return (
                <OldComponent {...this.props} />
            )
        }
    }
} 

let newHello = withLogger(Hello)

export default newHello