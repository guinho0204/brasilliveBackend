import { Request,Response } from "express";
import { updatetosaveservice } from "../updatetosaveservice/updatetosaveservice";
class updatesavecontroller{
   async handle(req:Request,res:Response){
        const{uid_user_recebe,valor} = req.body
        const updatetosaveservic = new updatetosaveservice()
        const updateto = await updatetosaveservic.execute({
            uid_user_recebe,valor
        })
        return res.json(updateto)
   }
}
export{updatesavecontroller}