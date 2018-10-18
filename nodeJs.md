#### 关键字

​	exports  将 定义的方法导出

```
exports.add = function add(a,b){
	return a+b
}
```

​	require 引入别的js文件方法

```
var temp  = require('./myFunction.js')
console.log(temp.add(2,3))
```

执行js文件方法

```
node myNode.js
```

#### 发送请求

```
//http为node.js内置模块,用来创建http服务器
var http = require('http');
//createServer:http模块中创建服务器的方法
http.createServer(function(request,response){
	//设置响应头
	response.writeHead(200,{'Content-Type':'text/plain'});
	//设置响应结束
	response.end('Hello World\n');
}).listen(8888);
console.log('server running at http:127.0.0.1:8888/');
```

#### 渲染页面

​	在后端写的js代码不会再页面显示

```
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
```

#### 获取url中的请求

```
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
```

