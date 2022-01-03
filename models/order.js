const Sequelize=require("sequelize");

const sequelize=require("../database");

const Order=sequelize.define("orders",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull :false,
        primaryKey:true
    },
    total:{
        type:Sequelize.INTEGER,
        allowNull:false
    }

})

module.exports=Order;