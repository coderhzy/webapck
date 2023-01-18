const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: "/users"})
userRouter.get('/list',(ctx,next) => {
    ctx.body = [
        {name: 'hzy',age: 29,height: 189},
        {name: 'koe',age: 30,height: 180},
        {name: 'ccc',age: 10,height: 30},
    ]
})

app.listen(9000,() => {
    console.log('服务器启动在9000端口');
})

app.use(userRouter.routes())