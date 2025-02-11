import  {Router} from 'express'
import * as userController from '../controllers/users.controller.mjs'

const router = Router()

//GET
router.get("/listado",userController.get_all_users)
router.get("/:id",userController.get_user)
//POST
router.post("/insertar_nuevo/", userController.insert_user)
//UPDATE
router.put("/modificar/:id", userController.update_user)
//DELETE
router.delete("/eliminar/:id", userController.delete_user)

export default router