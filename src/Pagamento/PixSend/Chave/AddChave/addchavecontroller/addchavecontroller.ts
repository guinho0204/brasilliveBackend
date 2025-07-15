import { Request,Response } from "express"
import { addchaveservice } from "../addchaveservice/addchaveservice"

class addchavecontroller{
    async handle(req:Request,res:Response){

         const {chave,uid_user,tipo} = req.body
         const  addchaveserv = new addchaveservice();
         const add  = await addchaveserv.execute({chave,uid_user,tipo})
         return res.json(add)
    }
}
export{addchavecontroller}