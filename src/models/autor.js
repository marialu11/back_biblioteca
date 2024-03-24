import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {libro} from './libro.js';

export const autor = sequelize.define('autor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    autor_nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    autor_apellido:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

autor.hasMany(libro, {
    foreignKey: 'fk_autor_id', 
    sourceKey: 'id'
});

libro.belongsTo(autor, {
    foreignKey: 'fk_autor_id', 
    targetId: 'id'
});