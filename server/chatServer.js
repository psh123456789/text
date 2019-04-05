var http=require("http");
var msgList=[];
var server=http.createServer(function (req,res) {
    var str="";
    req.on("data",function (_data) {
        str+=_data;
    });
    req.on("end",function () {
        var obj=JSON.parse(decodeURIComponent(str));
        if(obj.type===1){
            msgList.push({name:obj.name,msg:obj.msg,date:obj.date});
        }
        res.writeHeader(200,{"Content-Type":"text/html","Access-Control-Allow-Origin":"*"});
        res.write(encodeURIComponent(JSON.stringify({result:msgList,error:null})));
        res.end();
    })
});
server.listen(3010,"10.9.25.176",function () {
    console.log("开启服务");
});