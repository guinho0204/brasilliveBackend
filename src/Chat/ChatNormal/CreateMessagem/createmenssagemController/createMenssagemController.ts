import { Request, Response } from "express"
import { createMenssagemService } from "../createmensaggemService/createMenssagemService"

class createMenssagemController{
   async handle(req:Request,res:Response){
    
      const{remetente,destinatario,menssagem,menssagem_id} = req.body;
      const createmensaggemService = new createMenssagemService();
      const createMenssgaem = await createmensaggemService.execute({
        remetente,
        destinatario,
        menssagem,
        menssagem_id
      })

      return res.json(createMenssgaem)
   }
}
export{createMenssagemController}