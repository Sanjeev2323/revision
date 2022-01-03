const fs=require('fs').promises;

const f1=async ()=>{
    await fs.appendFile('input1.txt',"i am going to append to some file");
    console.log("data appended");
}

f1();