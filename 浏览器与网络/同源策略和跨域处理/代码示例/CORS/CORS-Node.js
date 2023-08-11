const http = require('http')
const url = require('url')
// 创建server
const server = http.createServer()
// 定义跨域访问白名单
const authOrigin = ['http://127.0.0.1:5500']

// 监听http请求
server.on('request', (req, res) => {
    const user = { // 模拟返回数据
        id: 1,
        name: 'zhangsan',
        age: 12
    }
    const origin = req.headers.origin
    if (authOrigin.includes(origin)) {
        // 添加响应头，实现cors
        // res.setHeader('Access-Control-Allow-Origin', '*') // 允许所有的地址跨域访问
        res.setHeader('Access-Control-Allow-Origin', origin) // 只有白名单中的地址才可以跨域访问
    }
    res.end(JSON.stringify(user))
})

// 设置监听端口
server.listen(8081, function () {
    console.log('server is running on 8081 port！')
})
