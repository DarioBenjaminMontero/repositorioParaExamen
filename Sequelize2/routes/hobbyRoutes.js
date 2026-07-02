const express = require("express")
const { crearHobbies, buscarPorGenero, buscarPorSimilitud, buscarTodos, recomendarPorEdad } = require("../controllers/hobbiesController.js")

const router = express.Router()

router.post("/", crearHobbies)
router.get("/usuarios", buscarPorGenero)
router.get("/similitud", buscarPorSimilitud)
router.get("/", buscarTodos)
router.get("/recomendar/:id", recomendarPorEdad)

module.exports = router