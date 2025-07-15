import { Request,Response } from "express";
import { setseguidoresservice } from "../setseguidoresservice/setseguidoresservice"; 

class setseguidorescontroller{
   async handle(req:Request,res:Response){
        const id_user_ira_seguir = req.query.id_user_ira_seguir as string
        const id_user_ira_ser_seguido = req.query.id_user_ira_ser_seguido as string
        const setseguidoresservic = new  setseguidoresservice()
        const setseguidores = await setseguidoresservic.execute({id_user_ira_seguir,id_user_ira_ser_seguido})
        return res.json(setseguidores)
   }
}
export{setseguidorescontroller}