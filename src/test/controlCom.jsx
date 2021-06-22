// 受控组件 与 非受控组件
import React from 'react'

class UserName extends React.Component{
    state = {
        value : 'tetst'
    }

    handChange = (e) =>{
        this.setState({
            value : e.target.value
        })
    }

    render(){
        // 受控组件：input 的 value 受状态控制
        // 非受控组件：input 的 value 不受状态控制

        return (
            <div>
                {/* 受控组件 */}
                <input value={this.state.value} onChange={this.handChange} />

                {/* 非受控组件 */}
                <input defaultValue={this.props.value} />
            </div>
        )
    }
}

export default UserName