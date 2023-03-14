import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { v4 as uuidv4 } from 'uuid';
export const com=sequelize.define('Table-com',{
    id: {
        type: DataTypes.UUID,
        defaultValue: ()=> uuidv4(),
        primaryKey:true
    },
    contenido:{
        type: DataTypes.STRING
    },
    autor:{
        type: DataTypes.STRING
    },
    publicacion_id:{
        type: DataTypes.UUID
    }
});