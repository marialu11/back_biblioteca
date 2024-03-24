import {prestamo} from '../models/prestamo.js';
import {usuario} from '../models/usuario.js';
import {libro} from '../models/libro.js';

export const getPrestamos = async(req, res) => {
    try {
        const prestamos = await prestamo.findAll({
            include: [{
                model: usuario, 
                as: 'usuario',
                attributes: ['usuario_nombre', 'usuario_apellido', 'usuario_cedula']
            },
            {
                model: libro, 
                as: 'libro',
                attributes: ['libro_titulo'] 
            }],
            order: [
                ['id_prestamo', 'ASC']
            ]
        })
        res.json(prestamos)
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getPrestamoById = async (req, res) => {
    try {
        const { id } = req.params
        const prestamo_ = await prestamo.findOne({
            where:{id_prestamo: id}
        })
        res.json(prestamo_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createPrestamos = async (req, res) => {
    console.log(req.body)
    const { fk_usuario_id, fk_libro_id, fecha_prestamo, fecha_devolucion } = req.body
    try {
        const newPrestamo = await prestamo.create({
            fk_usuario_id,
            fk_libro_id,
            fecha_prestamo,
            fecha_devolucion
        })
        res.json(newPrestamo)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const updatePrestamos = async (req, res) => {
    const { id } = req.params
    try {
        const prestamo_ = await prestamo.findOne({
            where: {id_prestamo: id}
        })
        prestamo_.set(req.body)
        await prestamo_.save()
        return res.json(prestamo_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deletePrestamos = async (req, res) => {
    const { id } = req.params
    try {
        const result = await prestamo.destroy({
            where: {
                id_prestamo: id
            }
        })
        console.log(result)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}