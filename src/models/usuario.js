import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {prestamo} from './prestamo.js';

export const usuario = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_cedula:{
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_telefono:{
        type: DataTypes.STRING
    },
    usuario_correo:{
        type: DataTypes.STRING
    }
})

usuario.hasMany(prestamo, {
    foreignKey: 'fk_usuario_id', 
    sourceKey: 'id_usuario'
});

prestamo.belongsTo(usuario, {
    foreignKey: 'fk_usuario_id', 
    targetId: 'id_usuario'
});