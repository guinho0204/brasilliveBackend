import { Request,Response } from "express";
import { createmoedasservice } from "../createmoedaservice/createmoedaservice";

class createmoedacontroller{
       async handle(req:Request,res:Response){
        
           const{uuid_user,pcoin_paga_moeda} = req.body
           const createmoedaser = new createmoedasservice()
           const createmoeda = await createmoedaser.execute({uuid_user,pcoin_paga_moeda})
           return res.json(createmoeda)

       }
}
export{createmoedacontroller}