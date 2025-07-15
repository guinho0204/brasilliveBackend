import { Response,Request } from "express";
import { mostrarpresentedarservice } from "../mostrarpresentedarservice/mostrarpresentedarservice";


class mostrarpresentedarcontroller{
    async handle(req:Request,res:Response){
        
        const uuid_live = req.query.uuid_live as string
        const mostrarpresenteservidar = new mostrarpresentedarservice()
        const mostrarpresentdar = await mostrarpresenteservidar.execute({uuid_live})
        return res.json(mostrarpresentdar)

    }
} 
export{mostrarpresentedarcontroller}