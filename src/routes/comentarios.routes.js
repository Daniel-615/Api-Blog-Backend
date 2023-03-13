import {Router} from 'express';
import {getcoment,getcomentId,deletecoment,updatecoment,createcoment}from '../controllers/comentarios.controllers.js'
const router= Router();

router.get('/api/publicaciones/comentarios',getcoment);
router.post('/api/publicaciones/comentarios',createcoment);
router.get('/api/publicaciones/comentarios/:id',getcomentId);
router.put('/api/publicaciones/comentarios/:id',updatecoment);
router.delete('/api/publicaciones/comentarios/:id',deletecoment);
export default router;
