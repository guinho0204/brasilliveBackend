 import { Request,Response } from "express"
import { createseguidoresservice } from "../createseguidoresservice/createseguidoresservice"

class createseguidorescontroller{
  async handle(req:Request,res:Response){
     
    const id_user_ira_ser_seguido = req.query.id_user_ira_ser_seguido  as string
    const createseguidor = new createseguidoresservice()
    const segui = await createseguidor.execute({id_user_ira_ser_seguido})
    return res.json(segui)
  }
}
export{createseguidorescontroller}