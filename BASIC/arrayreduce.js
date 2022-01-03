const person=[{
    name:"san",
    salary:100
},
{
    name:"ram",
    salary:200
}
]

const amount=person.reduce((total,person)=>{

    return total+person.name;

},100)
console.log(amount);