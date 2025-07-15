import { Request,Response } from "express"
import { createvizuliveservice } from "../createvizuliveservice/createvizuliveservice"
class createvizulivecontroller{
    async handle(req:Request,res:Response){
           const {user,id_live,id_user,ativolive} = req.body
           const createvisu = new createvizuliveservice();
           const createvis = await createvisu.execute({
             user,id_live,id_user,ativolive
           })
           
           return res.json(createvis)
    }  
}
export{createvizulivecontroller}