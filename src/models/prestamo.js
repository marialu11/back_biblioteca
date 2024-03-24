import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const prestamo = sequelize.define('prestamo', {
    id_prestamo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fk_usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fk_libro_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_prestamo:{
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_devolucion:{
        type: DataTypes.DATE
    }
})