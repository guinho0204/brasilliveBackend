import { Request,Response } from "express"
import { updatevizuliveservice } from "../updatevizuliveservice/updatevizuliveservice"

class updatevizulivecontroller{
   async handle(req:Request,res:Response){
        
        const {uid_live,visulive} = req.body
        const updatevisu = new updatevizuliveservice()
        const updatevi = await updatevisu.execute({
            uid_live,
            visulive
        })
        return res.json(updatevi)
        
   }
}
export{updatevizulivecontroller}