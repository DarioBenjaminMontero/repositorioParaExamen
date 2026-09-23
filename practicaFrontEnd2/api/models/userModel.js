const { sequelize } = require("../config/db.js")
const { DataTypes } = require("sequelize")

const User = sequelize.define("User" , {

id: {

type : DataTypes.INTEGER,
primaryKey : true,
autoIncrement : true

},
email : {

    type : DataTypes.STRING,
    allowNull : false

},
contraseña : {
type : DataTypes.STRING,
allowNull : false
}, 
activeCart:{
    type : DataTypes.JSONB,
    defaultValue : []
}
},{

tableName : "users",
timestamps : false

})
module.exports = { User }