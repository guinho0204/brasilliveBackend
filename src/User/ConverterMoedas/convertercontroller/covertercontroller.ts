import { Request,Response } from "express";
import { converterservice } from "../converterservice/converterservice"; 


class convertercontroller{
   async handle(req:Request,res:Response){
         const{uuid_user,valor} = req.body
         const convertserv = new converterservice();
         const conve = await convertserv.execute({uuid_user,valor})
         return res.json(conve)
   }
}
export{convertercontroller}