// 新版生命周期演示

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
    
    // state 或 props 更新后，调用 render 前会走这一步，因此可以依据返回值决定是否更新 
    shouldComponentUpdate(nextProps, nextState){
        console.log('父 shouldComponentUpdate，询问是否要更新')
        return nextState.number % 2 ==0  // 奇数时return false,不更新；偶数return true,更新
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
                { this.state.number > 100 ? null : <SubCounter count={this.state.number} />}
            </div>
        )
    }
}

class SubCounter extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log('子 DidMount')
    }

    // 静态方法，新的props，老的state，主要是通过属性props得到状态state时用
    static getDerivedStateFromProps(nextProps, prevState){
        let { count } = nextProps  // 父更新后，传入新的props（count:1） 
        return { count : count * 2}  // 返回新的状态对象，键为state的count，值为props传入的count
    } 

    render(){
        console.log('子 render')

        return (
            <div>{this.state.count}</div>
        )
    }
}

export default Counter


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