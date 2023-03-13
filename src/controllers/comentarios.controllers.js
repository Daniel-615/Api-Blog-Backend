import {com} from '../models/comentarios.js';
export const getcoment= async(req,res)=>{
   try {
        const coment= await com.findAll()
        res.json(coment);
   } catch (error) {
     return res.status(500).json({message:error.message})
   }
};
export const createcoment=async(req,res)=>{
    try {
        const {contenido,autor,publicacion_id} =req.body
        const newcoment=await com.create({
            contenido,
            autor,
            publicacion_id
        });
        res.json(newcoment);    
    } catch (error) {
        return res.status(500).json({message:error.message})   
    }
};
export const getcomentId=async(req,res)=>{
    const {id}=req.params;
    try {
        const coment=await com.FindOne({
            where: {id}//,
            //attributes: ["contenido"]
        })
        res.json(coment);
    } catch (error) {
        return res.status(500).json({message:error.message})      
    }
};
export const updatecoment=async(req,res)=>{
    const {id}=req.params;
    try {
        const coment =await com.FindOne({
            where: {id},
        })
        await com.update(coment);
        return res.json(coment);
    } catch (error){
        return res.status(500).json({message:error.message})   
    }
};
export const deletecoment=async(req,res)=>{
    const {id}=req.params;
    try {
       const result=await com.destroy({
            where: {id},
        })
        return res.sendStatus(200) 
    } catch (error) {
        return res.status(500).json({message:error.message})   
    }  
};