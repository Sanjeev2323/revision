const numbers=[1,2,3,45,5,6];
/*
numbers.forEach((items)=>{
    console.log(items);
})
*/

/*
const even=numbers.filter((value)=>{
    
        return value%2===0;
    
})
console.log(even);

numbers.push(4,5);
console.log(numbers);

numbers.pop();
console.log(numbers);
*/

/*
numbers.unshift(0);
console.log(numbers);
*/
const req=numbers.find((item)=>{
    return item===45;
})
console.log(req);

const numbers2=numbers.slice(1,3);
console.log(numbers2);
const c=numbers.concat(numbers2);
console.log(c);