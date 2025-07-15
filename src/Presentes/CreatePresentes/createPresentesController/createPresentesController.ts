import { Request,Response } from "express"
import { createPresenteService } from "../createPresentesService/createPresenteService"
import fs from 'fs';
import path from 'path';
import s3 from "../../../config/s3Client";
import { Upload } from "@aws-sdk/lib-storage";

class createPresentesController{
    async handle(req:Request,res:Response){
       try{

        const {nome,valor} = req.body;
        const presenteService = new createPresenteService();
        
        if(!req.file){
                throw new Error("error upload file")
        }else{
           const {originalname, filename:presente_imagem} = req.file;

           const presenteSever = await presenteService.execute({
               nome,
               valor,
               presente_imagem,
           })
            
          const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'tmp', presente_imagem);

          
          const uploader = new Upload({
            client: s3,
            params: {
              Bucket: process.env.S3_BUCKET_NAME,
              Key: `presenteImages/${presente_imagem}`, // nome final com 'pasta'
              Body: fs.createReadStream(filePath),
              ContentType: req.file.mimetype,
             
            },
          });
          const result = await uploader.done();

           return res.json(presenteSever);

           
        }
      }catch(err){
        console.log(err)
      }
    }
    
}
export{createPresentesController}