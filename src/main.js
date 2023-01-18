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
    import('./router/about').then(res => {
        console.log(res);
    })
}

btn2.onclick = () => {
    import('./router/category').then(res => {
        console.log(res);
    })
}
