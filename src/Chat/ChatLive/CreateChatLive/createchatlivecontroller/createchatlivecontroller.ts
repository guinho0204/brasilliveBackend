import { Request,Response } from "express"
import { createchatliveservice } from "../createchatliveservice/createchatliveservice"

class createchatlivecontroller{
    async handle(req:Request,res:Response){
        try{

        
            const {user,id_live,id_user,menssagem,valor_presente,vezes,icon_presente,create_at} = req.body
            const createchatliveserv = new createchatliveservice();
            const createchat = await createchatliveserv.execute({
                user,
                id_live,
                id_user,
                menssagem,
                valor_presente,
                vezes,
                icon_presente,
                create_at
            }) 
            return res.json(createchat)
    }catch(err){

        console.log(err)
  
    }
 }
}
export{createchatlivecontroller}