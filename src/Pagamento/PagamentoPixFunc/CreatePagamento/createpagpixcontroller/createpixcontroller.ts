import { createpixservice } from "../createpagpixservice/createpixservice";
import { Request,Response } from "express";
import crypto from 'crypto'

class createpixcontroller{
    async handle(req:Request,res:Response){
        const {valore,nome,cpf,uid_user,quantidade_moedas} = req.body
        const createpixservi = new createpixservice()
        const idhash = crypto.randomBytes(16).toString('hex')
        const createpix = await createpixservi.execute({valore,nome,cpf,uid_user,quantidade_moedas,idhash})
        return res.json(createpix)
    }
}
export{createpixcontroller}