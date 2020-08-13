const FormData = require('form-data');
const fs = require('fs');
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
        const res = await got.post(href, {json: postData});
        ctx.response.body = res;
    }
    await next();
}

// 文件上传转发
const fileUploadProxy = async (ctx, next) => {
    const form = new FormData();
    const file = ctx.request.files.file;
    const href = ctx.request.href;
    form.append('file', fs.createReadStream(file.path));
    const res = await got.post(href, {
        body: form
    })
    ctx.response.body = res;
    await next();
}

module.exports = {
    getProxy,
    postProxy,
    fileUploadProxy
}
