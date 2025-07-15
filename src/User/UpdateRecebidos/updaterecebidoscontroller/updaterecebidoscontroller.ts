import { Request,Response } from "express"
import { updaterecebidosservice } from "../updaterecebidosservice/updaterecebidosservice"
class updaterecebidoscontroller{
    async handle(req:Request,res:Response){
         const{uid_user_recebe,valorTotal} = req.body
         const updaterecebidoservice = new updaterecebidosservice();
         const update = await updaterecebidoservice.execute({
            uid_user_recebe,
            valorTotal
         })
        return res.json(update)
    }
}
export{updaterecebidoscontroller}