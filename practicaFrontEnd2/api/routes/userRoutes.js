const express =require("express")
const Router = express.Router()
const { Login, Registro } = require("../controllers/userController.js")
const { autorizacion } = require("../middlewares/autorizacion.js")

Router.post("/registro", Registro)
Router.post("/login", Login)

module.exports=Router 