var http = require('http');
//url为onde.js内置模板,可以接收请求地址中的参数
var url = require('url');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	//参数1: 设置专职的请求地址
	//参数2: 是否将请求参数转换为js对象 
	//		  true  - 转换为对象, {name:'ddd'}
	//		  false - 不转换,直接返回字符串,name=ddd  默认是false
	var params = url.parse(request.url,true).query;
	response.write('name:'+ params.name)
	
	//设置响应结束
	response.end('Hello World\n');
}).listen(8888);
console.log('server running at http:127.0.0.1:8888/');