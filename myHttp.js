//http为node.js内置模块,用来创建http服务器
var http = require('http');
//createServer:http模块中创建服务器的方法
http.createServer(function(request,response){
	//设置响应头
	response.writeHead(200,{'Content-Type':'text/plain'});
	for(var i = 0 ; i < 10 ; i++){
		response.write('hello World\n')
	}
	
	
	//设置响应结束
	response.end('Hello World\n');
}).listen(8888);
console.log('server running at http:127.0.0.1:8888/');