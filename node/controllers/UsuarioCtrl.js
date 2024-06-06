import Usuario from "../models/Usuario.js";

//Obtener usuarios

export const getUsuarios = async (req,res)=>{
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({message: error.message})
    }
}


//Obtener un usuario

export const BuscarUsuario = async (req,res)=>{
    try {
        const usuarios = await Usuario.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(usuarios)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear usuario

export const crearUsuario = async (req,res)=>{
    try {
        await Usuario.create(req.body)
        res.json({"message":"Usuario creado"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar

export const actualizarUsuario = async (req,res)=>{
    try {
        await Usuario.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({"message":"Usuario modificado"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//eliminar

export const EliminarUsuario = async(req,res)=>{
    try {
        Usuario.destroy({where:{id: req.params.id}})
    } catch (error) {
        res.json({"message":"Usuario eliminado"})
    }
}
