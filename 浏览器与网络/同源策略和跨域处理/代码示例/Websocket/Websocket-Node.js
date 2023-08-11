// WebSocket服务
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8081 });

server.on("connection", function (socket) {
    // 监听客户端发送的消息
    socket.on("message", function (data) {
        console.log('客户端发来消息:', data)
        socket.send(data); // 向客户端发送消息
    });
});