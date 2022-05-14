var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("guess game server")
});

function Connection(connection){
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		var vv=0;
		var n=50;
		vv=parseInt(data.toString());
		console.log(vv.toString());
		if(vv==n)connection.end("you guess the number\n");
		if(vv>n)connection.end("you number is to big\n");
		if(vv<n)connection.end("you number is to small\n");
	}
	function onClose(){
		connection.destroy();
	}
	function onError(data){
		console.log(data);
		connection.destroy();
	}



}
