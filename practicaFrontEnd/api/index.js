const express = require("express")
const servidor = express()
const { sequelize } = require("./config/db.js")
const cors = require("cors")
servidor.use(express.json())
servidor.use(cors())
const Router = require("./router/routerUsuarios.js")

servidor.use("/users", Router)

servidor.listen(3000, async()=>{

    sequelize.sync({force: false})

    console.log("el servidor corre en el puerto 3000");
})