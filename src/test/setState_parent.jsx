import React from 'react'
// import SetState from './setState_child'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number : 0
        }
    } 

    handClick = () =>{
        // 更新 是 批量延迟更新，回调同样也是！
        // 回调 与 更新 的关系，全部更新完再统一做回调！不是每更新一次，就回调一次！

    
        // 第一种情况：参数为对象，更新会合并，只更新一次，即界面展示为1
        // this.setState({number: this.state.number + 1}, ()=>{
        //     console.log('回调 1：', this.state.number)  // 1
        // })
        // console.log('第 1 次更新：', this.state.number)  // 0

        // this.setState({number: this.state.number + 1}, ()=>{
        //     console.log('回调 2：', this.state.number)  // 1
        // })
        // console.log('第 2 次更新：', this.state.number) // 0

        // 第二种情况：参数为函数，更新不会合并，会更新两次，即界面展示为2
        // this.setState(state => ({number:state.number + 1}), ()=>{
        //     console.log('回调 1：', this.state.number)  // 2
        // })
        // console.log('第 1 次更新：', this.state.number)  // 0

        // this.setState(state => ({number:state.number + 1}), ()=>{
        //     console.log('回调 2：', this.state.number)  // 2
        // })
        // console.log('第 2 次更新：', this.state.number) // 0

        // 第三种情况：第一次更新，参数是对象；第二次更新，参数是函数！
        // this.setState({number: this.state.number + 1}, ()=>{
        //     console.log('回调 1：', this.state.number)  // 2
        // })
        // console.log('第 1 次更新：', this.state.number)  // 0
        // this.setState(state => ({number:state.number + 1}), ()=>{
        //     console.log('回调 2：', this.state.number)  // 2
        // })
        // console.log('第 2 次更新：', this.state.number) // 0

        // 第四种情况：
        setTimeout(()=>{
            this.setState({number: 1})
            console.log(this.state.number)  // 1

            this.setState({number: 2})
            console.log(this.state.number)  // 2
        })

    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handClick}>加1</button>
            </div>
        );
    }
}

export default Counter