import { Request,Response } from "express"
import { updateuserdataniverservice } from "../updateuserdataniverservice/updateuserdataniverservice"

class updateuserdatanivercontroller{
   async handle(req:Request,res:Response){
        const {uid_live,idade,data_nascimento,sexo} = req.body
        const updateuserdataniverservic = new updateuserdataniverservice()
        const updateuser = await updateuserdataniverservic.execute({
              uid_live,
              idade,
              data_nascimento,
              sexo
        }) 
        return res.json(updateuser)

   }
}
export{updateuserdatanivercontroller}