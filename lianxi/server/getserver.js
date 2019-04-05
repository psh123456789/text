var http = require("http");
var strMath = require("querystring")
var strver = http.createSever(function(req,res){
    req.on("data",function(_data){

    })
    req.on("end",function){
        var obj = strMath.parse(req.url.split("?")[1]);
        var.age = Number(obj.age)+5;
        console.log(req);
        res.writeHeader(200,{"Content-Type":"text/html","Access-Control-Allow-Origin":"*"});
        res.write(JSON.stringify(obj));
        res.end();
    }
})
server.listen(3010,"10.9.25.33",function(){
console.log("开启服务")；
})