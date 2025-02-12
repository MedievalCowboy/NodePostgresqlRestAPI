//index.js
import express from 'express'
import morgan from  'morgan'

import {PORT} from './config/env.config.mjs'
import Routes from './routes/routes.mjs'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(Routes)

const run = app.listen(PORT, () =>{
    console.log("Servidor iniciado en el puerto ",PORT)
    console.log("http://localhost:"+PORT)
})