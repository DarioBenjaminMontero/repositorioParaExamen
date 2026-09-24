const jwt = require("jsonwebtoken")
const { User } = require("../models/userModel.js")
const SECRET = 'misecreto'
const validarVotos = async (req, res, next) => {

    const token = req.headers['authorization'].split(" ")[1] || req.headers['authorization']

    const { producto } = req.body

    try {

        jwt.verify(token, SECRET, async (err, decoded) => {

            if (err) return res.status(401).json({ message: 'Error al acceder' })
            const user = await User.findByPk(decoded.id)
            if (!user) {
                return res.status(404).json({ message: "no encontrado" })
            }
            if (user.isDeleted == true) {
                return res.status(403).json({ message: "deshabilitado" })
            }

            let arrayCosas = []

            arrayCosas = user.ratedProductsId
            let existe = false;
            for (let i = 0; i < arrayCosas.length; i++) {

                if (producto == arrayCosas[i]) {
                    existe = true
                    break;
                }
                
            }
            if (existe == false) {
                arrayCosas.push(producto)
            }
            else {

                res.status(400).json({ message: "ya existe" })
                return
            }
            req.user = {
                id: user.id,
                nombre: user.nombre,
                productos: arrayCosas
            }
            next()
        })

    }
    catch (error) {

        console.log(error)
        res.status(500).json(error)

    }

}

module.exports = { validarVotos }