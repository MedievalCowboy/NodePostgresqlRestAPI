
import {Router} from 'express'

import userRoutes from './users.routes.mjs'

const router = Router()

router.use("/user",userRoutes)

export default router