import * as userServices from '../services/users.services.mjs'
import {stringFormater} from '../utils/strings.js'

export const get_all_users = async (req,res) =>{
    const users = await userServices.get_all_users()
    return res.status(200).json(users)
}

export const get_user = async (req,res) =>{
    try {
        const id = parseInt(req.params.id)
        const user_found = await userServices.get_user(id)
        if (!user_found) return res.status(404).json({error:'Usuario con id:  no encontrado'})
        return res.status(200).json(user_found)
    } catch (e) {
        let message_error = 'Error al tratar de obtener el usuario con id: '+req.params.id
        if (e.name == 'PrismaClientValidationError') message_error = stringFormater("Error al tratar de validar el parametro: {0}",[req.params.id])
        res.status(400).json({error:message_error})
    }
   
}

export const insert_user = async (req,res) =>{
    try{
        const new_user = await userServices.insert_user(req.body)
        return res.status(200).json(new_user)
    }catch(e){
        let message_error = 'Error al tratar de insertar un nuevo usuario'
        if (e.code == 'P2002') message_error = 'Datos existentes. Uno o más datos asociados a campos unicos ya existen en la base de datos'
        return res.status(400).json({error:message_error})
    }
}

export const update_user = async (req,res) =>{
    try {
        const id = parseInt(req.params.id)
        const updated_user = await userServices.update_user(id, req.body)
        return res.status(200).json(updated_user)
    } catch (e) {
        return res.status(400).json({error:'Error al tratar de actualizar el usuario: '+req.params.id,body:req.body})
    }
}

export const delete_user = async (req,res) =>{
    try {
        const id = parseInt(req.params.id)
        const deleted_user = await userServices.delete_user(id)
        if (!deleted_user) return res.status(400).json({error:'Usuario no encontrado'})
        return res.status(200).json(deleted_user)
    } catch (error) {
        return res.status(400).json({error:'Error al tratar de eliminar al usuario con id: '+req.params.id})
    }
}