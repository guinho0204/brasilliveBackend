import { Request,Response } from "express" 
import { updateuserimagemservice } from "../updateuserimageservice/updateuserimageservice"
import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';
import { s3 } from "../../../config/s3Client";
import { Upload} from "@aws-sdk/lib-storage";
import {DeleteObjectCommand } from "@aws-sdk/client-s3";

import admin from "../../../config/firebaseAdmin";

class updateuserimagecontroller{
    async handle(req:Request,res:Response){
        
    try{

         const{uid_live, image_Antiga,nome} = req.body

        const updateuserimageserv = new updateuserimagemservice()
         
        if(!req.file){
            throw new Error('error upload file')
        }else{ 

           
         const {originalname, filename:image_user} = req.file 

         const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'tmp', image_user);
         
         console.log(image_Antiga)



           const deleteCommand = new DeleteObjectCommand({
              Bucket: process.env.S3_BUCKET_NAME,
              Key: image_Antiga,
            });

           await s3.send(deleteCommand); 

         
         const uploader = new Upload({
          client: s3,
          params: {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: image_user,
            Body: fs.createReadStream(filePath), 
            ContentType: req.file.mimetype,
          },
        });

    
        const result = await uploader.done(); 
          
       

          const updateuserimage = await updateuserimageserv.execute({
                 image_user,
                 uid_live,
                 nome
          })
              
          const message = {
                notification: {
                  title: nome+' criou uma live',
                  body: 'Não perca live de '+ nome+' ,seja o primeiro a prensentear',
                  image:'https://janlivebucket764575.s3.us-west-2.amazonaws.com/'+updateuserimage.Image_user,
                  
                },
                topic: 'all'
              };
          
              try {
                const response = await admin.messaging().send(message);
                console.log('✅ Notificação enviada:', response);
              } catch (error) {
                console.error('❌ Erro ao enviar notificação:', error);
                throw error;
              }
          
       

        return res.json(updateuserimage)
       
        }
    
    }catch(err){
       console.log(err+ 'erro ao fazer update de imagem')
    } 

  }
    
}
export{updateuserimagecontroller}