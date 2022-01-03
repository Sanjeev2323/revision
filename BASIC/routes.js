var http=require('http');

http.createServer((req,res)=>{
    if(req.url=='/hello'){
    
    res.end("hi");
    }
}).listen(3005,()=>{
    console.log("server is running");
});