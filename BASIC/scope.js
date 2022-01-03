
var a=10;     //variables declared globally 
for(var i=1;i<=5;i++){
    let a=5;
    console.log(a);
}
console.log(a);   //let and const are block scoped variables