import { Request,Response } from "express"
import { deletechatliveservice } from "../deletechatliveservice/deletechatliveservice"


class deletechatlivecontroller{
    async handle(req:Request,res:Response){
          
         const id_live = req.query.id_live as string
         const deletechatliev = new deletechatliveservice();
         const deletechat = await deletechatliev.execute({
           id_live
         })
         return res.json(deletechat)


    }
}
export{deletechatlivecontroller}