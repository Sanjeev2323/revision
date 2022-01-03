const sequelize=require("./database");

const Customer=require('./models/customer');
const Order=require('./models/order');

Customer.hasMany(Order);

let customerId=null;

sequelize.sync({force:true})
.then((result)=>{
    return Customer.create({name:"sanjeev",email:"sanjeev414@gmail.com"})
  //  console.log(result);
})
.then(customer=>{
    customerId=customer.id;
    console.log("fisrt customer created",customer);

    return customer.createOrder({total:45});
})
.then(order=>{
    console.log("order value is",order);
    return Order.findAll({where:customerId});
})
.then(orders=>{
    console.log("all the orders are",orders);
})
.catch((err)=>{
    console.log(err);
})