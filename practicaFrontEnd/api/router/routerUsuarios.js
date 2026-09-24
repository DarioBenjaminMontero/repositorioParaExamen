const express = require("express")
const Router = express.Router()
const { Registro, Login, Desactivacion, Servicio, RecibirCodigo, Recuperar, gestionarVotos, pedirimagenes, imgenp } = require('../controllers/userController.js')
const { autorizacion } = require('../middlewares/autorizacion.js')
const { validacion } = require("../middlewares/validarRecuperacion.js")
const { validarVotos } = require("../middlewares/validarVotos.js")

const { aumentarElUso } = require('../middlewares/rateLimiter.js')
Router.post("/login", Login)
Router.post("/registro", Registro)
Router.patch("/desactivacion", autorizacion, Desactivacion)
Router.post("/servicio", aumentarElUso, Servicio)
Router.post("/recibirCodigo", RecibirCodigo)
Router.post("/recuperar", validacion, Recuperar)
Router.post("/productos", validarVotos, gestionarVotos)
Router.get("/", autorizacion, pedirimagenes)
Router.post("/rec", autorizacionx, imgenp)

module.exports = Router