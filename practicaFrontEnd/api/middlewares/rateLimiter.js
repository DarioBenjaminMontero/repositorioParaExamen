const jwt = require("jsonwebtoken")
const { User } = require("../models/userModel.js")
const SECRET = "misecreto"

const aumentarElUso = async(req, res,next) =>{

const token = req.headers['authorization'].split(" ")[1] || req.headers['authorization']

try{

jwt.verify(token, SECRET, async(err, decoded) =>{

if(err){
res.status(400).json({message: "error al acceder"})
return
}

const usuario = await User.findByPk(decoded.id)
console.log(usuario)
if(!usuario){

    res.status(404).json({message: "no encontrado"})
return
}
if(usuario.apiUsageCount == usuario.monthlyApiQuota){

res.status(400).json({message: "limite alcanzado"})
return
}
const numero = usuario.apiUsageCount + 1
console.log(usuario.apiUsageCount)
const consulta2 = await User.update({
   apiUsageCount : numero
}, {
where : {
id : decoded.id
}
}
)

console.log(consulta2)

next()
})

}catch(error){

    res.status(500).json({message: "mala del servidor"})

}

}

module.exports = { aumentarElUso }