
const message = 'Hello World';
console.log(message);

function foo (num1,num2) {
    console.log('foo function exec~');
    console.log(arguments[0],arguments[1])
}

foo(1,232323);


const obj  = {
    name: "hzy",
    bar() {
        return 'bar'
    }
}
