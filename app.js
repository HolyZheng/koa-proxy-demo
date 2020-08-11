const Koa = require('koa');
const Router = require('koa-route');
const app = new Koa();
const {getProxy, postProxy, fileUploadProxy} = require('./src/middlewares');

app.use(getProxy);
app.use(postProxy);
app.use(fileUploadProxy);

app.use(Router.get('*', ctx => {
    const href = ctx.request.href;
    ctx.response.body = href;
}))

app.listen(3000);