const express = require("express")
const { crearUsuario, crearRelacion, buscarTodos, promedioEdad, buscarPorCalleYAltura, meterDias } = require("../controllers/usersController.js")

const router = express.Router()

router.post("/", crearUsuario)
router.post("/relacion", crearRelacion)
router.get("/", buscarTodos)
router.get("/promedio", promedioEdad)
router.post("/nuevoDia", meterDias)
router.get("/calleAltura/:calle/:altura", buscarPorCalleYAltura)
module.exports = router