import { configwebhookpixservice } from "../configwebhookpixservice/configwebhookpixservice"
import { Request,Response } from "express"

class configpixwebhookcontroller{
   async handle(req:Request,res:Response){
         
          const cofigebhook = new configwebhookpixservice()
          const cofi = await cofigebhook.execute()
          return res.json(cofi)
   }
}
export{configpixwebhookcontroller}