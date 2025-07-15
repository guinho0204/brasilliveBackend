import { Request,Response } from "express";
import { darpresenteservice } from "../darpresenteservice/darpresenteservice";
import { updatetosaveservice} from "../../../../User/updatetosave/updatetosaveservice/updatetosaveservice";
import { updaterecebidosservice } from "../../../../User/UpdateRecebidos/updaterecebidosservice/updaterecebidosservice";



class darpresentecontroller{
    async handle(req:Request,res:Response){
          const {nome, uid_user_recebe, uid_user_dando, valor, vezes,imagem_presente} = req.body
          const darpresenteserv = new darpresenteservice()
          const darpresente = await darpresenteserv.execute({
            nome, 
            uid_user_recebe, 
            uid_user_dando, 
            valor, 
            vezes,
            imagem_presente
          })
          return res.json(darpresente)

    }

}
export{darpresentecontroller}