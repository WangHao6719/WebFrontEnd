const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    const user = { // 模拟返回数据
        id: 1,
        name: 'zhangsan',
        age: 12
    }
    res.end(JSON.stringify(user))
})

// 监听请求
app.listen(8081, () => {
    console.log('服务启动成功，在8081端口监听请求....')
})

