import express from "express"
import pubroutes from './routes/publicaciones.routes.js';
import comroutes from './routes/comentarios.routes.js';
const app=express();

//middlewares
app.use(express.json());

app.use(pubroutes);
app.use(comroutes);
export default app;