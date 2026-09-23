const jwt = require("jsonwebtoken")
const { User } = require('../models/userModel.js')
const secreto = "MICODIGOSECRETO"
const autorizacion = async(req, res,next) =>{
    const token = req.headers['authorization'].split(" ")[1] || req.header['authorization']
try{

    jwt.verify(token, secreto, async(err, decoded)=>{

if(err){

    res.status(401).json({message: "error al acceder"})
return
}
const user = await User.findByPk(decoded.id)

if(!user){
res.status(400).json({message: "usuario no encontrado"})
return
}
req.user = {

    id: user.id,
    email : user.email

}
next()

    })

}catch(error){

    res.status(500).json(error)

}
}
module.exports = { autorizacion }