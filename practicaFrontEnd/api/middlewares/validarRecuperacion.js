const jwt = require("jsonwebtoken")
const { User } = require("../models/userModel.js")
const SECRET = 'misecreto'
const { Op } = require("sequelize");
const validacion = async (req, res, next) => {

    const { nombre, tokenRecuperacion, nuevaContraseña } = req.body

    try {
        const user = await User.findOne({

            where: {

                nombre: nombre,
                resetPasswordToken: tokenRecuperacion,
                // Verifica que la fecha actual sea menor a la fecha de expiración
                resetPasswordExpire: { [Op.gt]: new Date() }
            }

        })
        if (!user) {
            return res.status(404).json({ message: "token o usuario no validos" })
        }
        if (user.isDeleted == true) {
            return res.status(403).json({ message: "deshabilitado" })
        }
        req.user = {
            id: user.id,
            nombre: user.nombre,
            contraseña: nuevaContraseña
        }
        next()

    }
    catch (error) {

        console.log(error)
        res.status(500).json(error)

    }

}

module.exports = { validacion }