import { Request,Response } from "express";
import { mostrarMenssagemService } from "../mostrarMenssagemService/mostrarMenssagemService";


class mostrarMensagemController{
   async handle(req:Request,res:Response){
     const Menssagem_id = req.query.mensagem_id as string;

     const mostrarmenssagemservice = new mostrarMenssagemService();
     const mostrarMenssagem = await mostrarmenssagemservice.execute({
        Menssagem_id
     });
   return res.json(mostrarMenssagem)     
 }

}
export{mostrarMensagemController}