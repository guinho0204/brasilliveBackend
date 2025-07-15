import { Request,Response } from "express";
import { deletepagamentopixservice } from "../deletepagamentopixservice/deletepagamentopixservice";
class deletepagamentopixcontroller{
    async handle(req:Request,res:Response){

         const uid_pagamento = req.query.uid_pagamento as string
         const deleteseguiserv = new deletepagamentopixservice();
         const deletes = await deleteseguiserv.execute({uid_pagamento})  
         return res.json(deletes)         
  
    }
}
export{deletepagamentopixcontroller}