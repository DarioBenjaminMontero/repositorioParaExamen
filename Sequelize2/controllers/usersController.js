const { Usuarios, Hobbies, UsuarioHobbies } = require("../models/index.js")


const crearUsuario = async(req, res) =>{

const firstname = req.body.firstname
const lastname = req.body.lastname
const dni = req.body.dni
const edad = req.body.edad
const genero = req.body.genero
const calle = req.body.calle
const altura = req.body.altura
const consulta = await Usuarios.create({
firstname : firstname,
lastname : lastname,
dni: dni,
edad : edad,
genero: genero,
calle: calle,
altura: altura
})
if(consulta){
res.status(201).json({message: "creado"})
}
else{
res.status(500).json({message: "no creado, faltan datos"})
}

}


const buscarTodos = async(req, res) =>{

const consulta = await Usuarios.findAll()

res.status(200).json(consulta)

}

const crearRelacion = async(req, res) =>{

const id = req.body.id
const idH = req.body.idH

const usuario = await Usuarios.findByPk(id)
const consulta = await usuario.addHobby(idH)

if(consulta){

res.status(201).json({message: "creado"})

}

}

const promedioEdad = async(req, res) =>{

const personasTotales = await Usuarios.findAll()
let edades =0;
let suma = 0; 
for(let i = 0; i< personasTotales.length; i++){

    suma+= personasTotales[i].edad
edades++;

}

let promedio = suma/edades

res.status(200).json({promedio: promedio})

}

const buscarPorCalleYAltura = async(req, res) =>{

const calle = req.params.calle
const altura = req.params.altura

const consulta = await Usuarios.findAll({include : [{

model: Hobbies

}],
where : {

calle: calle,
altura: altura

}
})

res.status(200).json(consulta)

}

const meterDias = async(req, res) =>{

const id = req.body.id
const idH = req.body.idH
const dia = req.body.dia
const usuario = await Usuarios.findByPk(id);
const hobbie = await Hobbies.findByPk(idH)

const consulta = await usuario.addHobby(hobbie, {through : { dia : dia}})

res.status(201).json({message: "creado"})
}

const buscarPorDias = async(req, res) => {

const dia = req.body.dia

const consulta = await Usuarios.findAll({include : [{

model: Hobbies,
through : {

    attributes : ["dia"], 
    where : {

        dia: dia

    }
},
required : false
}]})

res.status(200).json({
      message: `Lista de todos los usuarios y sus actividades para el día: ${dia}`,
      data: consulta
    
    })

}


const buscarElMasViejo = async(req, res) =>{
let arrayObjetos = []
const consulta = await Usuarios.findAll()
let mayor = consulta[0].edad;
for(let i = 0; i<consulta.length; i++){
if(consulta[i].edad > mayor){
mayor = consulta[i].edad
}
}
for(let i = 0; i<consulta.length; i++){
if(consulta[i].edad == mayor){
arrayObjetos.push(consulta[i])
}
}
res.status(200).json({message: "los mas viejos son: ", message2: arrayObjetos})
}




module.exports = { crearUsuario, crearRelacion, buscarTodos, promedioEdad, buscarPorCalleYAltura, meterDias }