var fs=require('fs');


//here reading of a file giving as acallback we overcome blocking

fs.readFile('input.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    
})

console.log('program ended');