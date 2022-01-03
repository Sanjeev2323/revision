var a=10;

var s=setInterval(()=>{
    console.log("hello world");
},100)

setTimeout(()=>{
    clearInterval(s);
        console.log('1');
},200)

console.log(a);