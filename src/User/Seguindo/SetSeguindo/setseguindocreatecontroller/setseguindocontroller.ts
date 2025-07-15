import { Request,Response } from "express";
import { setseguindoservice } from "../setseguindoservice/setseguindoservice";
class setseguindocontroller{
   async handle(req:Request,res:Response){
      
      const id_user_ira_seguir = req.query.id_user_ira_seguir as string
      const setseguidoreserv  = new setseguindoservice()
      const serv  =  await setseguidoreserv.service({id_user_ira_seguir});
      return res.json(serv)
   }
}
export{setseguindocontroller}