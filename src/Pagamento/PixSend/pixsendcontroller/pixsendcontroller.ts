import { Request,Response } from "express"
import { pixsendservice } from "../pixsendservice/pixsendservice"
import crypto from 'crypto'

class pixsendcontroller{
    async handle(req:Request,res:Response){
        
          const {chave,valor,id_user,nome}  = req.body
          const pixsednserv =  new pixsendservice()
          const idhash = crypto.randomBytes(16).toString('hex')
          const pisxsedn = await pixsednserv.execute({idhash,chave,valor,id_user,nome})
          return res.json(pisxsedn)
    }
}
export{pixsendcontroller}
        
  