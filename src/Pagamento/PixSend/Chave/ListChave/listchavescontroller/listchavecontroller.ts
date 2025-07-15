import { Request,Response } from "express"
import { listchaveservice } from "../listchavesservice/listchaveservice"

class listchavecontroller{
   async handle(req:Request,res:Response){
    
         const uid_user  = req.query.uid_user as string
         const listchaveserv = new listchaveservice();
         const listchave =  await listchaveserv.execute({uid_user})
         return res.json(listchave)
   }
}
export{listchavecontroller}