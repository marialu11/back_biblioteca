import {usuario} from '../models/usuario.js'

export const getUsuarios = async(req, res) => {
    console.log(req.body)
    try {
        const usuarios = await usuario.findAll(
            {
                order: [
                    ['id_usuario', 'ASC']
                ]
            }
        )
        res.json(usuarios)
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createUsuarios = async (req, res) => {
    const { usuario_cedula, usuario_nombre, usuario_apellido, usuario_telefono, usuario_correo } = req.body
    try {
        const newUsuario = await usuario.create({
            usuario_cedula,
            usuario_nombre,
            usuario_apellido,
            usuario_telefono,
            usuario_correo
        })
        res.json(newUsuario)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getUsuarioById = async (req, res) => {
    try {
        const { id } = req.params
        const usuario_ = await usuario.findOne({
            where:{id_usuario: id},
            attributes: ['usuario_cedula', 'usuario_nombre', 'usuario_apellido'],
        })
        res.json(usuario_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateUsuario = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const usuario_ = await usuario.findOne({
            where: {id_usuario: id}
        })
        usuario_.set(req.body)
        await usuario_.save()
        return res.json(usuario_)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const result = await usuario.destroy({
            where: {
                id_usuario: id
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