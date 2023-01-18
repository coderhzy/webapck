import App from './react/App'
import React from 'react'
import ReactDom from 'react-dom/client'
import sum from './ts/math'
import foo from './utils/foo'
import './css/abc.css'

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


// 请求axios
import axios from 'axios'

axios.get('/api/users/list').then(res => {
    console.log(res.data);
})


const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
btn1.textContent = 'about'
btn2.textContent = 'category'
document.body.appendChild(btn1)
document.body.appendChild(btn2)

btn1.onclick = () => {
    import(/* webpackChunkName: "about"*/ /* webpackPrefetch: true */ './router/about').then(res => {
        res.default()
    })
}

btn2.onclick = () => {
    import(/* webpackChunkName: "category" */ /* webpackPrefetch: true */ './router/category').then(res => {
        console.log(res);
    })
}


foo()
console.log("修改111");

const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
console.log('使用dayjs获取最新值',now);