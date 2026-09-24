const { defaultValueSchemable } = require("sequelize/lib/utils");
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
},
monthlyApiQuota : {
    type : DataTypes.INTEGER,
    defaultValue : 10
},
apiUsageCount: {
    type : DataTypes.INTEGER,
    defaultValue: 0
},
resetPasswordToken: {
type : DataTypes.STRING
},
resetPasswordExpire:{
type: DataTypes.DATE
}

}, {

tableName : "users",
timestamps : false

})

module.exports = { User }