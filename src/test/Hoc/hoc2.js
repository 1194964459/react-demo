// 封装一个高阶组件，表单相关

import React from 'react'

const fromLocalStorage = (OldComponent, fieldName) =>{
    return class extends React.Component{
        state =  {
            value : '' 
        }

        componentDidMount(){
            let value = localStorage.getItem(fieldName)
            this.setState({
                value
            })
        }

        handChange = (e) => {
            localStorage.setItem(fieldName, e.target.value)
            this.setState({
                value : e.target.value
            })
        }
        render(){
            return (
                <OldComponent value={this.state.value} onChange={this.handChange} />
            )
        }
    }
}

const fromAjax = (OldComponent)=>{
    return class extends React.Component{
        state = {
            value : ''
        }

        componentDidMount(){
            fetch('/dic.json'),then(res => res.json()).then(data =>{
                let value = data[this.props.value]
                this.setState({
                    value
                })
            })
        }

        render(){
            return (
                <OldComponent value={this.state.value} />
            )
        }
    }
}

class Field extends React.Component{
    render(){
        return (
            <input value={this.props.value} onChange={this.props.onChange} />
        )
    }
}

const AjaxUserName = fromAjax(Field)

let LocalUserName = fromLocalStorage(AjaxUserName, 'username')
// let LocalPassword = fromLocalStorage(Field, 'password')

// export {
//     LocalUserName
// }

export default LocalUserName