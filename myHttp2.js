var http = require('http');
//urlΪonde.js����ģ��,���Խ��������ַ�еĲ���
var url = require('url');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	//����1: ����רְ�������ַ
	//����2: �Ƿ��������ת��Ϊjs���� 
	//		  true  - ת��Ϊ����, {name:'ddd'}
	//		  false - ��ת��,ֱ�ӷ����ַ���,name=ddd  Ĭ����false
	var params = url.parse(request.url,true).query;
	response.write('name:'+ params.name)
	
	//������Ӧ����
	response.end('Hello World\n');
}).listen(8888);
console.log('server running at http:127.0.0.1:8888/');