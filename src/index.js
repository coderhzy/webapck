import axios from "axios";
import { total } from './calc.js'
const message = "hello world";
console.log(message);

function sayHello() {
  console.log("hello");
}
console.log('12312313133r777')
console.log("total引入", total(1, 2));

sayHello();

axios.get("/api/users/list").then((res) => {
  console.log(res.data);
});
