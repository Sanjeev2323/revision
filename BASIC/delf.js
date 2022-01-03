var fs=require('fs').promises;

const f1=async ()=>{
    const delFile=await fs.unlink('input2.txt');
    console.log("file deleted");
}
f1();

console.log("hi");