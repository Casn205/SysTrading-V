import express from "express";
import cors from 'cors'
import db from "./database/db.js";

import UsuarioRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/Usuario',UsuarioRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa')
} catch (error) {
    console.log('Error :${error}')
}


app.get('/',(req,res)=>{
    res.send('Hola')
})

app.listen(8000,()=>{
    console.log('Servidor ejecutandose  en http://localhost:8000/')
})