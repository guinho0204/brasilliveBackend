import { Request,Response } from "express";
import { updatepagamentoservice } from "../updatepagamentoservice/updatepagamentoservice";

class updatepagamentocontroller{
    async handle(req:Request,res:Response){
        
          const {status,uid_pagamento} = req.body
          const updatepagamento = new updatepagamentoservice()
          const pagamento = await updatepagamento.execute({status,uid_pagamento})
          return res.json(pagamento)

    }
}
export{updatepagamentocontroller}