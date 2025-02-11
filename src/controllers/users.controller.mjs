import * as userServices from '../services/users.services.mjs'

export const get_all_users = async (req,res) =>{
    const users = await userServices.get_all_users()
    res.json(users)
}

export const get_user = async (req,res) =>{
    const id = parseInt(req.params.id)
    const user_found = await userServices.get_user(id)
    if (!user_found) return res.status(404).json({error:'Usuario no encontrado'})
    res.status(200).json(user_found)
}

export const insert_user = async (req,res) =>{
    const new_user = await userServices.insert_user(req.body)
    res.json(new_user)
}

export const update_user = async (req,res) =>{
    const id = parseInt(req.params.id)
    const updated_user = await userServices.update_user(id, req.body)
    res.json(updated_user)
}

export const delete_user = async (req,res) =>{
    const id = parseInt(req.params.id)
    const deleted_user = await userServices.delete_user(id)
    if (!deleted_user) return res.status(400).json({error:'Usuario no encontrado'})
    res.json(deleted_user)
}

