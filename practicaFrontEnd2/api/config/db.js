const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("practica2", "postgres", "1234", {

host : "localhost",
dialect : "postgres",
logging : false

})

module.exports = { sequelize }