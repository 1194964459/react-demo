import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// 自我测试

// 状态提升
// import Calculator from './test/Calculator'

// 合成事件
import SyntheticEvents from './test/event2'
// import SyntheticEvents from './test/event2.1'



// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Calculator /> */}
    <SyntheticEvents />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
