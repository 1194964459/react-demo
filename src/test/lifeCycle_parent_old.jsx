// 旧版生命周期演示

import React from 'react'

class Counter extends React.Component {
    static defaultProps = {
        name: 'defaultProps'
    }
    
    constructor(props){
        super(props)
        this.state = {
            number : 0
        }
        console.log('初始化 构造函数中...')
    }
    UNSAFE_componentWillMount(){
        console.log('父 componentWillMount')
    }   
    
    // state 或 props 更新后，调用 render 前会走这一步，因此可以依据返回值决定是否更新 
    shouldComponentUpdate(nextProps, nextState){
        console.log('父 shouldComponentUpdate，询问是否要更新')
        return nextState.number % 2 ==0  // 奇数时return false,不更新；偶数return true,更新
    }

    UNSAFE_componentWillUpdate(){
        console.log('父 WillUpdate')
    }
    
    componentDidUpdate(){
        console.log('父 DidUpdate')
    }

    componentDidMount(){
        console.log('父 componentDidMount')
    }

    handClick = ()=>{
        this.setState({
            number : this.state.number + 1
        })
    }

    render(){
        console.log('父 render')

        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handClick}>加1</button>
                
                <hr />
                { this.state.number > 3 ? null : <SubCounter count={this.state.number} />}
            </div>
        )
    }
}

// 1. 初始化生命周期：
// 初始化 构造函数中...
// 父 componentWillMount
// 父 render
// 子 WillMount
// 子 render
// 子 DidMount
// 父 componentDidMount


// 2. 更新 生命周期：
// 父 shouldComponentUpdate，询问是否要更新
// 父 WillUpdate
// 父 render
// 子 componentWillReceiveProps
// 子 render
// 父 DidUpdate
class SubCounter extends React.Component {
    UNSAFE_componentWillMount(){
        console.log('子 WillMount')
    }   

    // 父组件传递给子组件属性时
    componentWillReceiveProps(){
        console.log('子 componentWillReceiveProps')
    }


    componentDidMount(){
        console.log('子 DidMount')
    }

    componentWillUnmount(){
        console.log('子 WillUnmount 销毁')
    }

    render(){
        console.log('子 render')

        return (
            <div>{this.props.count}</div>
        )
    }
}

export default Counter