const express = require("express")
const Router = express.Router()
const { Registro, Login, Desactivacion, Servicio } = require('../controllers/userController.js')
const { autorizacion } = require('../middlewares/autorizacion.js')

const { aumentarElUso } = require('../middlewares/rateLimiter.js')
Router.post("/login", Login)
Router.post("/registro", Registro)
Router.patch("/desactivacion",autorizacion ,Desactivacion)
Router.post("/servicio",aumentarElUso, Servicio)

module.exports = Router