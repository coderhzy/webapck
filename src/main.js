import App from './react/App'
import React from 'react'
import ReactDom from 'react-dom/client'
import sum from './ts/math'

const a = '111'

console.log(a);


const obj = {name: "hzy", age: 299}
const nickname = 'hzy'

console.log(nickname.includes('coder'))

const total = sum(1,3);
console.log(total);

// 编写react代码

const app = ReactDom.createRoot(document.querySelector('#app'))
app.render(<App />)