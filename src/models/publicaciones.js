import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {com} from '../models/comentarios.js';

export const pub=sequelize.define('Table-Pub',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING
    },
    contenido:{
        type: DataTypes.STRING
    },
    autor:{
        type: DataTypes.STRING
    }
});
pub.hasMany(com,{
    foreignkey: 'publicacion_id',
    sourceKey: 'id'
});
com.belongsTo(pub,{
    foreignkey: 'publicacion_id',
    targetId: 'id'
});