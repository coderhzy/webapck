import axios from 'axios'
const message = "hello world";
console.log(message);


function sayHello() {
    console.log("hello");
}

sayHello()

axios.get('/api/users/list').then(res => {
    console.log(res.data);
})