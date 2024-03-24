import {Router} from 'express';
import {getLibros, createLibros, updateLibros, deleteLibros, getLibroById} from '../controllers/libros.controller.js';


const router = Router();

router.get("/libros", getLibros);
router.post("/libros", createLibros);
router.put('/libros/:id', updateLibros)
router.delete('/libros/:id', deleteLibros)
router.get('/libros/:id', getLibroById)

export default router;