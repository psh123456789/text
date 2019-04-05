var http = require("http");
var server = http createServer(function(req,res){
    var str = "";
    req.on("data",function(data){
        str +=data;
    })
    req.on("end",function(){
        var obj=JSON.parse(decodeURIComponent(str));
        res.writeHeader(200,{"content-Type":"text/html","Access-Control-Allow-Origin":"*"});
        res.write(encodeURIcomponent(JSON.string(obj)));
        res.end();
      }
});
    server.listen(3002,"10.9.25.176",function(){
        console.log("开启服务")；
    })；




