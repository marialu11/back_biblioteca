import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {prestamo} from './prestamo.js';

export const libro = sequelize.define('libro', {
    id_libro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    libro_isbn:{
        type: DataTypes.STRING,
        allowNull: false
    },
    libro_titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fk_autor_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


libro.hasMany(prestamo, {
    foreignKey: 'fk_libro_id', 
    sourceKey: 'id_libro'
});

prestamo.belongsTo(libro, {
    foreignKey: 'fk_libro_id', 
    targetId: 'id_libro'
});

