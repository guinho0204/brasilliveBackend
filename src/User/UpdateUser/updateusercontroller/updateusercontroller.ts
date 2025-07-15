import { Request,Response } from "express"
import { updateuserservice } from "../updateuserservice/updateuserservice"


class updateusercontroller{
  async handle(req:Request,res:Response){
       const {user,uid_user} = req.body
       
       if(!req.file){
         throw new Error("não pode fazer upload de imagem")
       }
       else{
        const{originalname,filename:image_user} = req.file
        const serviceuserupdate = new updateuserservice()
        const serv =  await serviceuserupdate.execute({user,uid_user,image_user})
        return res.json(serv)

       }
  }
}export{updateusercontroller}