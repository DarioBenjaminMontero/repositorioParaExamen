const { User } = require("../models/userModel.js")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const crypto = require("crypto")
const SECRET = 'misecreto'

const Registro = async (req, res) => {
    const { nombre, contraseña, sexo } = req.body
    const contraseñaHasheada = await bcrypt.hash(contraseña, 10)
    const consulta = await User.findOne({
        where: {
            nombre
        }
    })
    console.log(consulta)
    if (!consulta) {
        try {
            const Usuario = await User.create({
                nombre: nombre,
                contraseña: contraseñaHasheada,
                sexo: sexo
            })
            console.log(Usuario)
            res.status(201).json({ message: "Usuario Creado Exitosamente" })
        }
        catch (error) {
            res.status(500).json({ message: "Error del servidor" })
        }
    }
    else {

        res.status(400).json({ message: "usuario ya existente" })
        return
    }
}


const Login = async (req, res) => {
    const { nombre, contraseña } = req.body
    const Usuario = await User.findOne({
        where: {
            nombre: nombre
        }
    })
    if (!Usuario) {
        res.status(404).json({ message: "No encontrado" })
        return
    }
    if (Usuario.isDeleted == true) {

        res.status(400).json({ message: "usuario deshabilitado" })
        return
    }
    else {
        const comparacion = await bcrypt.compare(contraseña, Usuario.contraseña)

        if (!comparacion) {
            res.status(400).json({ message: "Usuario o contraseña incorrectos" })
            return
        }
        const token = jwt.sign({
            id: Usuario.id,
            nombre: Usuario.nombre,
            sexo: Usuario.sexo

        }, SECRET, { expiresIn: '24h' })
        res.json({ token })
    }

}

const Desactivacion = async (req, res) => {

    const id = req.user.id
    const consulta = await User.update({
        isDeleted: true
    },
        {
            where: {
                id: id
            }

        })
    if (consulta) {
        return res.status(200).json({ message: "usuario desactivado" })
    }
    else {
        return res.status(500).json({ message: "error del servidor" })
    }

}

const Servicio = async(req, res) =>{

try{
    console.log("servicio utilizado")
res.status(200).json({message: "servicio utilizado"})
return
}catch(error){
res.status(500).json({message: "el servidor falló"})
return
}



}

const recibirCodigo = async(req, res) =>{



}

module.exports = { Registro, Login, Desactivacion, Servicio }