import { autor } from '../models/autor.js'

export const getAutores = async (req, res) => {
    try {
        const autores = await autor.findAll(
            {
                order: [
                    ['id', 'ASC']
                ]
            }
        )
        res.json(autores)
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getAutorById = async (req, res) => {
    try {
        const {id} = req.params
        const autor_ = await autor.findOne({
            where: {
                id
            },
            attributes: ['autor_nombre', 'autor_apellido'],
            order: [
                ['id', 'ASC'] 
            ]
        })
        res.json(autor_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

export const createAutores = async (req, res) => {
    const { autor_nombre, autor_apellido } = req.body

    try {
        const newAutor = await autor.create({
            autor_nombre,
            autor_apellido
        })
        res.json(newAutor)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const updateAutores = async (req, res) => {
    const { id } = req.params
    const { autor_nombre, autor_apellido } = req.body
    try {
        const Autor_ = await autor.findByPk(id)
        Autor_.autor_nombre = autor_nombre
        Autor_.autor_apellido = autor_apellido
        await Autor_.save()
        res.json(Autor_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
};

export const deleteAutores = async (req, res) => {
    const { id } = req.params
    try {
        //destroy es un metodo de sequelize que permite buscar y eliminar un registro de la base de datos (buscar y eliminar a la vez)
        await autor.destroy({
            where: {
                id
            }
        })
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}