import { Request,Response } from "express"
import { listvizuliveservice } from "../listvizuliveservice/listvizuliveservice"


class listvizulivecontroller{
   
    async handle(req:Request,res:Response){

          const id_live = req.query.id_live as string
          const listvizulive = new listvizuliveservice();
          const listvizu = await listvizulive.execute({id_live})
          return res.json(listvizu)

    }

}
export{listvizulivecontroller}