var fs=require('fs');

fs.writeFile('input2.txt',"this is writing in anew file",()=>{
    console.log("new file created and writen someting init");
})