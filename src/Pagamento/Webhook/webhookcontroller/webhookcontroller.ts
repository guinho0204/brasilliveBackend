import { Request,Response } from "express";
import { webhooksendservice } from "../webhooksendservice/webhookpixservice";


class webhookcontroller{
     async handle(req:Request,res:Response){
            
            
            console.log(req.body)
             
     }
}
export{webhookcontroller}
