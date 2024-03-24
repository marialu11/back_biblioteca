import {Router} from 'express';
import {getPrestamos, getPrestamoById, createPrestamos, updatePrestamos, deletePrestamos} from '../controllers/prestamos.controller.js';

const router = Router();

router.get("/prestamos", getPrestamos);
router.post("/prestamos", createPrestamos);
router.put('/prestamos/:id', updatePrestamos)
router.delete('/prestamos/:id', deletePrestamos)
router.get('/prestamos/:id', getPrestamoById)

export default router;