const fs=require('fs').promises;

const f1=async ()=>{
    await fs.rename('input.txt','input1.txt');
    console.log("file renamed");
}

f1();