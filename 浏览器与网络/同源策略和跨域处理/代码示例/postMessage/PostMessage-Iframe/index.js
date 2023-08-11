const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 设置路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}
);

// 监听端口
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
