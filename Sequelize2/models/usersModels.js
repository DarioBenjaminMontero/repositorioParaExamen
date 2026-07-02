const { sequelize } = require("../bd/bd.js")
const { DataTypes } = require("sequelize")

const Usuarios = sequelize.define("Usuarios", {

firstname : {

type : DataTypes.STRING,
allowNull : false
},
lastname : {
type: DataTypes.STRING,
allowNull : false
},
dni :{

    type: DataTypes.INTEGER,
    allowNull : false

},
edad: {

    type: DataTypes.INTEGER,
    allowNull : false

} ,
genero: {

    type: DataTypes.STRING,
    allowNull: false

},
calle: {

type: DataTypes.STRING,
allowNull: true

},
altura : {

type: DataTypes.INTEGER,
allowNull: true

}
},{

tableName : "usuarios",
timestamps : false

})

module.exports = { Usuarios }