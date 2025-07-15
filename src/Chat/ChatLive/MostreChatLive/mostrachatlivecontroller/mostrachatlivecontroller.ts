import { Request,Response } from "express"
import { mostrachatliveservice } from "../mostrachatliveservice/mostrachatliveservice";


class mostrachatlivecontroller{
    async handle(req:Request,res:Response){
          
         const id_live = req.query.id_live as string
         const mostrachatlive = new mostrachatliveservice();
         const mostrachat = await mostrachatlive.execute({
           id_live
         })
         return res.json(mostrachat)


    }
}
export{mostrachatlivecontroller}