const Koa = require('koa');
const Router = require('koa-route');
const bodyParser = require('koa-bodyparser')
const {getProxy, postProxy, fileUploadProxy} = require('./src/middlewares');

const app = new Koa();

app.use(bodyParser());
app.use(getProxy);
app.use(postProxy);
app.use(fileUploadProxy);

app.use( async ( ctx ) => {
    if ( ctx.path === '/' && ctx.method === 'GET' ) {
      // 当GET请求时候返回表单页面
      let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/">
          <p>userName</p>
          <input name="userName" /><br/>
          <p>nickName</p>
          <input name="nickName" /><br/>
          <p>email</p>
          <input name="email" /><br/>
          <button type="submit">submit</button>
        </form>
      `
      ctx.body = html
    } else if ( ctx.path === '/' && ctx.method === 'POST' ) {
      // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
      let postData = ctx.request.body
      ctx.body = postData
    } else {
      // 其他请求显示404
      ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
  })
  
  

app.listen(3000);