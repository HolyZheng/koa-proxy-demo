const got = require('got');

// 对get请求进行转发
const getProxy = async (ctx, next) => {
    if (ctx.request.method === 'GET') {
        const href = ctx.request.href;
        // 转发请求
        const res = await got(href);
        ctx.response.body = res;
    }
    await next();
}

// 对post请求进行转发
const postProxy = async (ctx, next) => {
    if (ctx.request.method === 'POST') {
        const href = ctx.request.href;
        const postData = ctx.request.body
        // 转发请求
        got.post(href, {json: postData})
    }
    await next();
}

// 文件上传转发
const fileUploadProxy = async (ctx, next) => {
    await next();
}

module.exports = {
    getProxy,
    postProxy,
    fileUploadProxy
}
