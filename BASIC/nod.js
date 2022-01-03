var http=require('http');

http.createServer((req,res)=>{
    if(req.url=='/hello'){
    res.write("hello world");
    res.end();
    }
}).listen(3000,()=>{
    console.log("server is running");
});