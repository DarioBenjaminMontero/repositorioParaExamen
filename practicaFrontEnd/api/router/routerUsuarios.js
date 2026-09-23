const express = require("express")
const Router = express.Router()
const { Registro, Login } = require('../controllers/userController.js')
const { autorizacion } = require('../middlewares/autorizacion.js')
Router.post("/login", Login)
Router.post("/registro", Registro)

module.exports = Router