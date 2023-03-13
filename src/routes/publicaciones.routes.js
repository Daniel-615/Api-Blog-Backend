import {Router} from 'express';
import {getPub,getPubId,createPub,deletePub,updatePub,getPubCom,postPubCom,getPubComId,updateComentario, deleteComentario} from '../controllers/publicaciones.controllers.js'
const router=Router();
router.get('/api/publicaciones',getPub);
router.post('/api/publicaciones',createPub);
router.get('/api/publicaciones/:id',getPubId); 
router.put('/api/publicaciones/:id',updatePub);
router.delete('/api/publicaciones/:id',deletePub);

//Relaciones
router.get('/api/publicaciones/:publicacion_id/comentarios',getPubCom);
router.post('/api/publicaciones/:publicacion_id/comentarios',postPubCom);
router.get('/api/publicaciones/:publicacion_id/comentarios/:id',getPubComId);
router.put('/api/publicaciones/:publicacion_id/comentarios/:id',updateComentario);
router.delete('/api/publicaciones/:publicacion_id/comentarios/:id',deleteComentario);
export default router;
