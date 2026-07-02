const { Hobbies, Usuarios } = require("../models/index.js")
const { Op } = require("sequelize"); 
const crearHobbies = async(req, res) =>{

const name = req.body.name
const descripcion = req.body.descripcion

const consulta = await Hobbies.create({
name : name,
descripcion : descripcion
})

if(consulta){
res.status(201).json({message: "creado"})
}else{
    res.status(500).json({message: "faltan datos"})
}
}

const buscarTodos = async(req, res)=> {

const consulta = await Hobbies.findAll()

res.status(200).json(consulta)
}

const buscarPorSimilitud = async(req, res) =>{

const descripcionSimilar = req.body.descripcionSimilar

const consulta = await Hobbies.findAll({where :{

    descripcion:{

[Op.like] : `%${descripcionSimilar}%`

    }

}})


res.status(200).json(consulta)
}

const buscarPorGenero = async(req, res) =>{

const genero = req.body.genero

const consulta = await Hobbies.findAll({
    include : [{
model: Usuarios,
where:{
    genero: genero
}
    }]
})


res.status(200).json(consulta)
}

const recomendarPorEdad = async(req, res) =>{
    const id = req.params.id
    const usuario = await Usuarios.findByPk(id, { include: Hobbies })
    const edadAFiltrar = usuario.edad;
    let arrayHobbies = []
    const consulta = await Usuarios.findAll({include: [{
model: Hobbies
    }],
where : {
edad : {
    [Op.eq] : edadAFiltrar
}
}
})
for(let i = 0; i<consulta.length; i++){
for(let j = 0; j< consulta[i].Hobbies.length; j++){
    let hobbieActual = consulta[i].Hobbies[j].name 
let esHobbyValido = true;
    for(let k = 0; k<usuario.Hobbies.length; k++){      
        if(usuario.Hobbies[k].name == hobbieActual || arrayHobbies.includes(hobbieActual)){
    esHobbyValido = false;
            break;
        }
    }
    if(esHobbyValido){
        arrayHobbies.push(hobbieActual)
    }
}
}
res.status(200).json(arrayHobbies)
}

module.exports = { crearHobbies, buscarPorGenero, buscarPorSimilitud, buscarTodos, recomendarPorEdad }