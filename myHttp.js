//httpΪnode.js����ģ��,��������http������
var http = require('http');
//createServer:httpģ���д����������ķ���
http.createServer(function(request,response){
	//������Ӧͷ
	response.writeHead(200,{'Content-Type':'text/plain'});
	for(var i = 0 ; i < 10 ; i++){
		response.write('hello World\n')
	}
	
	
	//������Ӧ����
	response.end('Hello World\n');
}).listen(8888);
console.log('server running at http:127.0.0.1:8888/');