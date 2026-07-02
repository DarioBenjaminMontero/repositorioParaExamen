const { Hobbies } = require("./hobbyModels.js")
const { Usuarios } = require("./usersModels.js")

const { sequelize } = require("../bd/bd.js")
const { DataTypes } = require("sequelize")

const UsuarioHobbies = sequelize.define("UsuariosHobbies", {

dia : {

type: DataTypes.STRING,
allowNull : false

}

}, {tableName: "usuariohobbies", timestamps : false})
Hobbies.belongsToMany(Usuarios, {through : UsuarioHobbies})
Usuarios.belongsToMany(Hobbies, {through : UsuarioHobbies})

module.exports = { Hobbies, Usuarios, UsuarioHobbies}