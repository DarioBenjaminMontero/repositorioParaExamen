const { sequelize } = require("../bd/bd.js")
const { DataTypes } = require("sequelize")

const Hobbies = sequelize.define("Hobbies",{

name: {

type : DataTypes.STRING,
allowNull : false

},
descripcion : {

type: DataTypes.STRING,
allowNull: false

}

},
{

tableName : "hobbies",
timestamps : false

})

module.exports = { Hobbies }