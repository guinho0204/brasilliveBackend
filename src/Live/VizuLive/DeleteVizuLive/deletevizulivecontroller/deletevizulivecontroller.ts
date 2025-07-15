import { Request,Response } from "express"
import { deletevizulivservice } from "../deletevizuliveservice/deletevizuliveservice"


class deletevizulivecontroller{
    async handle(req:Request,res:Response){
        const id_live = req.query.id_live as string
        const id_user = req.query.id_user as string
        
        const deletevizulive = new deletevizulivservice()
        const deletev =  await deletevizulive.execute({
            id_live,
            id_user
        })    

        return res.json(deletev)
    }
}
export{deletevizulivecontroller}