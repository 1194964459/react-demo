import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// 自我测试

// 状态提升
// import Calculator from './test/Calculator'

// 合成事件
// import SyntheticEvents from './test/event2'
// import SyntheticEvents from './test/event2.1'

// setState原理分析
// import SetState from './test/setState_parent'

// ref
// import Ref from './test/ref'

// 生命周期
// import LifeCycle from './test/lifeCycle_parent_old' 

// Context
// import Context from './test/context/App'

// 虚拟 Dom
// import VirtualDom from './test/virtualDom/index'

// 高阶组件
// import Hoc from './test/Hoc/hoc1'
// import LocalUserName from './test/Hoc/hoc2'

// 受控组件 与 非受控组件
// import ControlCom from './test/controlCom'

// Hook
import EffectHook from './test/hook/effectHook'


ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Calculator />
    <SyntheticEvents /> */}
    {/* <SetState /> */}
    {/* <Ref /> */}
    {/* <LifeCycle /> */}
    {/* <Context /> */}
    {/* <VirtualDom /> */}
    {/* <Hoc id="title" /> */}
    {/* <ControlCom /> */}
    {/* <LocalUserName /> */}
    {/* <Password /> */}

    <EffectHook />

  </React.StrictMode>,
  document.getElementById('root')
);

