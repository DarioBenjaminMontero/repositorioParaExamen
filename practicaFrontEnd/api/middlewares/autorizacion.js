const jwt  = require("jsonwebtoken")
const { User }= require("../models/userModel.js")
const SECRET = 'misecreto'
const autorizacion = async(req, res,next) =>{

const token = req.headers['authorization'].split(" ")[1] || req.headers['authorization']

try{

    jwt.verify(token, SECRET, async(err, decoded) =>{

if (err) return res.status(401).json({ message: 'Error al acceder' })
const user = await User.findByPk(decoded.id)
if(!user){
return res.status(404).json({message: "no encontrado"})
}
if(user.isDeleted == true){

return res.status(403).json({message: "deshabilitado"})

}
req.user={

    id: user.id,
    nombre : user.nombre

}
next()
    })

}
catch (error){

console.log(error)
res.status(500).json(error)

}

}

module.exports = { autorizacion }