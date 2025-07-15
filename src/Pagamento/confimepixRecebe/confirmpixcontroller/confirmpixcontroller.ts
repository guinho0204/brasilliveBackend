import { Request,Response } from "express";
import { confirmpixservice } from "../confirmpixservice/confirmpixservice";
class confirmpixcotroller{
    async handle(req:Request,res:Response){
        
          const chavepix = req.query.cahvepix as string
          const confirmserv = new confirmpixservice()
          const serv =  await confirmserv.execute({chavepix})
          return res.json(serv)
    }
}
export{confirmpixcotroller}