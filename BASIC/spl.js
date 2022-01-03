const sentence="i am a hard worker";

const arr=sentence.split('');

const nospace=arr.filter((value)=>{
 
    return value!==' ';
})
const nodup=nospace.filter((val,i,a)=>{
    return a.indexOf(val)==i;
})

console.log(nodup);