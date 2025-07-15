import { Request,Response } from "express"
import { mostrarpagamentopixservice } from "../mostrarpagamentopixservice/mostrarpagamentopixservice"
class mostrarpagamentopixcontroller{
    async handle(req:Request,res:Response){

        const chavepix = req.query.chavepix as string
        const mostrarpagamento = new mostrarpagamentopixservice()
        const mostrar = await mostrarpagamento.service({chavepix})
        return res.json(mostrar)
    }
}
export{mostrarpagamentopixcontroller}