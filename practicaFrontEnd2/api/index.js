const express = require("express")
const servidor = express()
const cors = require("cors")
const routerUsuarios = require("./routes/userRoutes.js")
const { sequelize } = require("./config/db.js")
servidor.use(cors())
servidor.use(express.json())
servidor.use("/users", routerUsuarios)
servidor.listen(3000, async()=>{

sequelize.sync({alter: true})
console.log("el servidor corre en el puerto 3000");
})