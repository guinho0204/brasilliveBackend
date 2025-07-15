import { Request,Response } from "express"
import { listaseguidoresservice } from "../listseguidoresservice/listseguidoresservice"

class listseguidorescontroller{
    async handle(req:Request,res:Response){
      
        const id_user_ira_ser_seguido =  req.query.id_user as string
        const  listaseguidores =new listaseguidoresservice()
        const listseguidores = await listaseguidores.execute({
            id_user_ira_ser_seguido
        })
        return res.json(listseguidores)
   


    }
}
export{listseguidorescontroller}