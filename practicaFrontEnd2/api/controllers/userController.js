const { User } =require("../models/userModel.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secreto = "MICODIGOSECRETO"

const Registro = async(req, res) =>{
const { email, contraseña } = req.body
const contraseñaHasheada = await bcrypt.hash(contraseña, 10)
const user = await User.findOne({where : {
email : email
}})
if(user){
    return res.status(400).json({message: "ya existe un usuario con ese mail"})
}
const user2 = await User.create({
email,
contraseña: contraseñaHasheada
})
if(user2){
res.status(201).json({message: "creado"})
}
else{
res.status(500).json({message : "no creado"})
}
}

const Login = async(req, res) =>{
const {email, contraseña} = req.body
const user = await User.findOne({
where: {
    email: email
}
})
if(user){
const consulta = await bcrypt.compare(contraseña, user.contraseña)
if(consulta){
const token = jwt.sign({id : user.id, email : user.email},
    secreto, {expiresIn : '24h'}
)
return res.status(200).json({token})
}
else {
return res.status(400).json({message: "contraseña incorrecta"})
}
}
else{
return res.status(400).json({message: "no existe el usuario requerido"})
}
}

module.exports = {Registro, Login}