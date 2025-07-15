import { Request,Response } from "express"
import { deleteseguindoservice } from "../deleteseguindoservice/deleteseguindoservice"

class deleteseguindocontroller{
  async handle(req:Request,res:Response){
       const id_user_ira_ser_seguido = req.query.id_user_ira_ser_seguido as string
       const id_user_ira_seguir = req.query.id_user_ira_seguir as string
       const deleteservice = new deleteseguindoservice()
       const deleteserv = deleteservice.execute({id_user_ira_seguir,id_user_ira_ser_seguido})

       return res.json(deleteserv)
  }
}
export {deleteseguindocontroller}