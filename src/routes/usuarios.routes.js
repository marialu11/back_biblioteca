
import {Router} from 'express';
import {getUsuarios, createUsuarios, getUsuarioById, updateUsuario, deleteUsuario} from '../controllers/usuario.controller.js';

const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios", createUsuarios);
router.put('/usuarios/:id', updateUsuario)
router.delete('/usuarios/:id', deleteUsuario)
router.get('/usuarios/:id', getUsuarioById)

export default router;