import {libro} from '../models/libro.js'
import {autor} from '../models/autor.js'

export const getLibros = async(req, res) => {
    try {
        const libros = await libro.findAll({
            include: [{
                model: autor, // Asegúrate de importar tu modelo Autor
                as: 'autor', // Este es un alias opcional que puedes definir en tu asociación
                attributes: ['autor_nombre', 'autor_apellido'] // Especifica los campos que quieres traer de la tabla autor
            }],
            order: [
                ['id_libro', 'ASC']
            ]
        })
        res.json(libros)
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getLibroById = async (req, res) => {
    try {
        const { id } = req.params
        const libro_ = await libro.findOne({
            where:{id_libro: id},
            attributes: ['libro_titulo', 'fk_autor_id'],
        })
        res.json(libro_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createLibros = async (req, res) => {
    const { libro_isbn, libro_titulo, fk_autor_id } = req.body
    try {
        const newLibro = await libro.create({
            libro_isbn,
            libro_titulo,
            fk_autor_id
        })
        res.json(newLibro)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const updateLibros = async (req, res) => {
    const { id } = req.params
    try {
        const libro_ = await libro.findOne({
            where: {id_libro: id}
        })
        libro_.set(req.body)
        await libro_.save()
        return res.json(libro_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteLibros = async (req, res) => {
    const { id } = req.params
    try {
        const result = await libro.destroy({
            where: {
                id_libro: id
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