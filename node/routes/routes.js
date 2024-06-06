import express from "express";
import { BuscarUsuario, EliminarUsuario, actualizarUsuario, crearUsuario, getUsuarios } from "../controllers/UsuarioCtrl.js";
const router = express.Router()

router.get('/',getUsuarios)
router.get('/:id',BuscarUsuario)
router.post('/',crearUsuario)
router.put('/:id',actualizarUsuario)
router.delete('/:id',EliminarUsuario)

export default router