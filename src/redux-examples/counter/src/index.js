import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

// counter 为一个 reducer 函数
const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter 
    value={store.getState()}
    onIncrement={() => {store.dispatch({ type: 'INCREMENT'})}}
    onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
  />,
  rootEl
)

render()
// 设置监听函数，一旦 State 发生变化，就自动执行这个函数。
store.subscribe(render)
