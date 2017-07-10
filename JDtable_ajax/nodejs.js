/**
 * Created by Administrator on 2017/6/21 0021.
 */
var http = require('http');//我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');