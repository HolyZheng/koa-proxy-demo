import Koa from 'koa';
import Router from 'koa-route';
const app = new Koa();

app.use(Router.get('/', ctx => {
    ctx.response.body = 'hello world';
}))

app.listen(3000);