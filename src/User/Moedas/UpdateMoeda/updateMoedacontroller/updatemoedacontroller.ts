import { Request,Response } from "express"
import { updatemoedaservice } from "../updateMoedaService/updatemoedaservice"

class updatemoedacontroller{
     async handle(req:Request,res:Response){

        const{uid_live,Pcoin_paga_moeda_user} = req.body
        const updatemoedasservi = new updatemoedaservice()
        const moedar = await updatemoedasservi.execute({uid_live,Pcoin_paga_moeda_user})
        return res.json(moedar)

     }
}
export {updatemoedacontroller}