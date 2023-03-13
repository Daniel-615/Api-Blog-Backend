import Sequelize from 'sequelize';
export const sequelize=new Sequelize('Blog','postgres','angel1234',{
    host: 'localhost',
    dialect: 'postgres'
});