import { Request,Response } from "express";
import { createuserservice } from "../createuserservice/createuserservice";
import { Upload } from "@aws-sdk/lib-storage";
import { s3 } from "../../../config/s3Client";
import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';




class createusercontroller{
    async handle(req:Request,res:Response){
      try{ 
        const{nome,user,numero_celular,
            password,followers,following,nivel,
            visualisacoes,saldo_money,descricao,rcoin_recebe_moeda_user,pcoin_paga_meda_user }= req.body

        const userservice = new createuserservice();

        if(!req.file){
            throw new Error('error upload file')
        }else{ 


         const {originalname, filename:image_user} = req.file 
         

         const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'tmp', image_user);

          

        const service = await userservice.execute({
            image_user,
            nome,
            user,
            numero_celular,
            password,
            followers,
            following,
            nivel,
            visualisacoes,
            saldo_money,
            descricao,
            pcoin_paga_meda_user,
            rcoin_recebe_moeda_user
            
        })


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
      
          
        
        return res.json(service)
       
        }
    }catch(err){
       console.log(err+ 'erro ao criar usuario')
    } 
    
    }
}
export{createusercontroller}

