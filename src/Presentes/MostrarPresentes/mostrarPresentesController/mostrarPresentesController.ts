import { Request,Response } from "express"
import { mostrarPresentesService } from "../mostrarPresentesService/mostrarPresentesService";



class mostrarPresentesController{
   async handle(req:Request,res:Response){
        const mostrarpresenteservice = new mostrarPresentesService();
        const mostrarpresente = await mostrarpresenteservice.execute()
      
      return res.json(mostrarpresente)
   }
}
export{mostrarPresentesController}