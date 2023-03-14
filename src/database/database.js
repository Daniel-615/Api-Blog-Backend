import Sequelize from 'sequelize';
import * as dotenv from 'dotenv' 
dotenv.config()
export const sequelize=new Sequelize(process.env.DATABASE,process.env.USUARIO,process.env.PASSWORD,{
    host: process.env.HOST,
    dialect: 'postgres'
    //conexion cambiada a por una base de datos en render
});         
