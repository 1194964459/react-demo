// 模拟弹窗打开/关闭 的功能，当点击 button 的时候打开，此时打开的情况下，点击弹窗 区域 外，就需要关闭。
import React from 'react';


class FuckEvent extends React.PureComponent {
    constructor(props){
        super(props);
        this.handleClickButton = this.handleClickButton.bind(this)
        this.state = {
            showBox: false
        }
    }
    
    componentDidMount() {
        document.body.addEventListener('click', this.handleClickBody, false)
    }
    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleClickBody, false)
    }
    handleClickBody = () => {
        this.setState({
            showBox: false
        })
    }
    handleClickButton = () => {
        this.setState({
            showBox: true
        })
    }
  
    render() {
        return (
            <div>
                <button onClick={this.handleClickButton}>点击我显示弹窗</button>
        
                {this.state.showBox && (
                    <div onClick={e => e.stopPropagation()}>我是弹窗</div>
                )}
            </div>
        )
    }
}

export default FuckEvent
  