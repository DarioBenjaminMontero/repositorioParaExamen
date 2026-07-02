const { sequelize } = require("./bd/bd.js")
const express = require("express")
const hobbieRoutes = require("./routes/hobbyRoutes.js")
const usuariosRoutes = require("./routes/usersRoutes.js")
const server = express()
server.use(express.json())
const PORT = 3300

server.use("/usuarios", usuariosRoutes)
server.use("/hobbies", hobbieRoutes)

server.listen(PORT, async() => {

await sequelize.sync({alter:true})
console.log("funciona")
})