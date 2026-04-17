import { Request,Response } from "express";
import { createuserservice } from "../createuserservice/createuserservice";


class createusercontroller{
    async handle(req:Request,res:Response){
      try{ 
        const{nome,user,numero_celular,
            password,followers,following,nivel,
            visualisacoes,saldo_money,descricao,rcoin_recebe_moeda_user,pcoin_paga_meda_user }= req.body

        const userservice = new createuserservice();

        if(!req.file){
            throw new Error('error upload file')
        }else{ 


        const {originalname, filename:image_user} = req.file 
         
        const service = await userservice.execute({
            image_user,
            nome,
            user,
            numero_celular,
            password,
            followers,
            following,
            nivel,
            visualisacoes,
            saldo_money,
            descricao,
            pcoin_paga_meda_user,
            rcoin_recebe_moeda_user
            
        })

        return res.json(service)
       
        }
    }catch(err){
       console.log(err+ 'erro ao criar usuario')
    } 
    
    }
}
export{createusercontroller}



