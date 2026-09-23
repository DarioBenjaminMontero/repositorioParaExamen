const { sequelize } = require("../config/db.js")
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {

id: {

type : DataTypes.INTEGER,
primaryKey : true,
autoIncrement : true

},

nombre: {

    type : DataTypes.STRING,
    allowNull : false

},
contraseña : {

type: DataTypes.STRING,
allowNull : false

}, 
sexo: {
type: DataTypes.STRING,
allowNull : false
}, 
isDeleted: {
type: DataTypes.BOOLEAN,
allowNull : false,
defaultValue : false
}

}, {

tableName : "users",
timestamps : false

})

module.exports = { User }