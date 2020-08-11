// 对get请求进行转发
const getProxy = async (ctx, next) => {
    await next();
}

// 对post请求进行转发
const postProxy = async (ctx, next) => {
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
