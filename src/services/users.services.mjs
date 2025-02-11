import db from "../db/db.js"

export const get_all_users = async () =>{
    return await db.user.findMany()
}

export const get_user = async (id) =>{
    const user = await db.user.findFirst({
        where:{
            id:id
        }
    })
    return user
}

export const insert_user = async (body_data)=>{
    const new_user = await db.user.create({
        data: body_data
    })
    return new_user
}

export const update_user = async (id, new_data) =>{
    const modified_user = await db.user.update({
        where:{
            id:id
        },
        data:new_data
    })
    return modified_user
}

export const delete_user = async (id) =>{
    const deleted_user = await db.user.delete({
        where:{
            id:id
        }
    })
    return deleted_user
}

