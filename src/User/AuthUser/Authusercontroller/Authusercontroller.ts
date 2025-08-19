import { Request,Response } from "express";
import { Authuserservice } from "../Authuserservice/Authuserservice";
import { convertTypeAcquisitionFromJson } from "typescript";


 class Authusercontroller{
     async handle (req:Request,res:Response){

        try{
            const numero_celular = req.query.numero_celular as string
            const password = req.query.password as string
            const serviceAuth = new Authuserservice();
            const Auth = await serviceAuth.execute({
                numero_celular,
                password
            })
           
            return res.json(Auth) 
        }catch(err){
            throw new Error('erro ao fazer login')
            
        }
     }
 }

 export{Authusercontroller}


 /* sigma pra fazer modelos de layout */