import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
export const com=sequelize.define('Table-com',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    contenido:{
        type: DataTypes.STRING
    },
    autor:{
        type: DataTypes.STRING
    },
    publicacion_id:{
        type: DataTypes.INTEGER
    }
});