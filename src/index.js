import app from './app.js'
import {sequelize } from './database/database.js'
import './models/publicaciones.js';
import './models/comentarios.js';
const port=3000;
async function main(){
    try {
        await sequelize.sync();
        // await sequelize.authenticate();
        // console.log('Connection has been established successfuly');
        app.listen(port);
        console.log(`Listening on port: ${port}`);
    } catch (error) {
        console.error("Unable to connect to database",error);
    }
};
main();
