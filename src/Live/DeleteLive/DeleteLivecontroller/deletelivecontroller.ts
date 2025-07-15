import { Request,Response } from "express"
import { deletliveservice } from "../DeleteLiveService/deleteliveservice"


class deletelivecontroller{
  async handle(req:Request,res:Response){
     
    const uidlive = req.query.uidlive as string;
    
    const deleteservice = new deletliveservice();

    const deletes = await deleteservice.execute({uidlive})

    return res.json(deletes)
  }
}
export{deletelivecontroller}