import { Request,Response } from "express";
import { adicionarmoneyservice } from "../adicionarmoneyservice/adicionarmoneyservice";


class adicionarmoneycontroller{
    async handle (req:Request,res:Response){
         const {uuid_live, val_money} = req.body
         const adicionarmoneyservi = new adicionarmoneyservice()
         const adiciona = await adicionarmoneyservi.execute({
            uuid_live,
            val_money
         })
         return res.json(adiciona)
    }
}
export{adicionarmoneycontroller}