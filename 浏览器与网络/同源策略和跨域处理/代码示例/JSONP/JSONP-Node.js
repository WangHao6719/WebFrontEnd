const http = require('http')
const url = require('url')

// 创建server
const server = http.createServer()
// 监听http请求
server.on('request', (req, res) => {
    // 获取客户端传来的回调函数名称
    const { callback } = url.parse(req.url, true).query
    const user = { // 模拟返回数据
        id: 1,
        name: 'zhangsan',
        age: 12
    }
    // 把数据和回调函数名称拼接成函数调用的方式返回
    const result = `${callback}(${JSON.stringify(user)})`
    res.end(result)
})

// 设置监听端口
server.listen(8081, function () {
    console.log('server is running on 8081 port！')
})
