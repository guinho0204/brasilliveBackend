import { Deletechaveservice } from "../Deletechaveservice/Deletechaveserice"
import { Request,Response } from "express"

class Deletechavecontroller{
    async handle(req:Request,res:Response){
        
         const uid_chavepix = req.query.uid_chavepix as string
         const deleteserv = new Deletechaveservice()
         const deletese = await deleteserv.execute({uid_chavepix})
         return res.json(deletese) 
         
    }
}
export{Deletechavecontroller}