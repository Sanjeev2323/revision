const Sequelize=require('sequelize');

const sequelize=new Sequelize('forpractise','root','S@njeev123',{
    dialect:"mysql",
    host:"localhost"
});

module.exports=sequelize