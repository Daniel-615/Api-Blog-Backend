import {pub} from '../models/publicaciones.js';
import {com} from '../models/comentarios.js';
export const getPub=async (req,res)=>{
    try {
        const publications=await pub.findAll();
        //console.log(publications);
        res.json(publications);
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const getPubId=async(req,res)=>{
    try {
        const {id}=req.params;
        const publi= await pub.findOne({
        where:{
            id
        }
    })
    if(!publi) return res.status(404).json({message: "La publicacion no existe"});
    res.json(publi);    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const createPub= async(req,res)=>{
    const {titulo,contenido,autor}=req.body;
    try {
        const newPub= await pub.create({
            titulo,
            contenido,
            autor
        })
        res.json(newPub);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const updatePub= async(req,res)=>{
    try {
        const { id}= req.params;
        const {titulo,contenido,autor} =req.body;
        const publicacion= await pub.findByPk(id);
        publicacion.titulo=titulo;
        publicacion.contenido=contenido;
        publicacion.autor=autor;
        await publicacion.save()
        res.send(publicacion);    
    } catch (error) {
        return res.status(500).json({message:error.message});   
    }
}
export const deletePub= async(req,res)=>{
    try {
        const {id}=req.params;
        await pub.destroy({
            where: {
                id,
            },
        })
        res.sendStatus(204);   
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
export const getPubCom= async(req,res)=>{
    const {publicacion_id}=req.params;
    try {
        const pubcom=await com.findAll({
            where: {publicacion_id:publicacion_id}
        })
        res.json(pubcom);
    } catch (error) {
        return res.status(500).json({message:error.message});   
    }
}
export const postPubCom=async(req,res)=>{
    const {id}=req.params;
    const {contenido,autor,publicacion_id}=req.body;
    try {
        const newPubCom= await com.create({
            where: {publicacion_id:id},
            contenido,
            autor,
            publicacion_id 
        })
        res.json(newPubCom);       
    } catch (error) {
        return res.status(500).json({message:error.message});   
    }
}
export const getPubComId=async(req,res)=>{
    const {id}=req.params;
    const {publicacion_id}=req.params;
    try {
        const pubcom=await com.findOne({
            where: {id:id},//{publicacion_id:publicacion_id},
            AND: {publicacion_id:publicacion_id}//{id:id}
        })
        res.json(pubcom);
    } catch (error) {
        return res.status(500).json({message:error.message});   
    }  
};
export const updateComentario = async (req, res) => {
    const { id, publicacion_id } = req.params;
    try {
      const coment = await com.findOne({
        where: { id: id, publicacion_id: publicacion_id }, // Cambia AND por coma (,) para especificar múltiples condiciones
      });
      if (!coment) {
        return res.status(404).json({ message: "Comentario no encontrado" });
      }
      await coment.update(req.body); // coment.update en lugar de com.set y com.save
      return res.json(coment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  export const deleteComentario = async (req, res) => {
    const { id, publicacion_id } = req.params;
    try {
      const result = await com.destroy({
        where: { id: id, publicacion_id: publicacion_id },
      });
      if (result === 0) {
        return res.status(404).json({ message: "Comentario no encontrado" });
      }
      res.send("Comentario eliminado");
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };