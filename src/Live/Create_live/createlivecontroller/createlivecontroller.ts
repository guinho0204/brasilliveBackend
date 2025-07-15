import { Request,Response } from "express"
import { createliveservice } from "../createliveservice/createliveservice"
import admin from "../../../config/firebaseAdmin";

class createlivecontroller{
    async handle(req:Request, res:Response){
     try{   
        const{image_live,descricao,vizulive,live_id,pcoin_paga_moeda_live,rcoin_recebe_moeda_live,uid_user,nome} = req.body
        
        const createservice = new createliveservice();
        
          const service = await createservice.execute({
            image_live,
            descricao,
            rcoin_recebe_moeda_live,
            pcoin_paga_moeda_live,
            live_id,
            uid_user,
            nome,
            vizulive
          }) 
          return res.json(service)
      }catch(err){
        console.log(err+ 'erro ao criar live')
      }
       
    }
}
export{createlivecontroller}