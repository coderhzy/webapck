import App from './react/App.jsx'
import React from 'react'
import ReactDom from 'react-dom/client'

const a = '111'

console.log(a);


const obj = {name: "hzy", age: 299}
const nickname = 'hzy'

console.log(nickname.includes('coder'))


// 编写react代码

const app = ReactDom.createRoot(document.querySelector('#app'))
app.render(<App />)