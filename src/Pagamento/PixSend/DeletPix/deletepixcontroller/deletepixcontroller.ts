import { Request,Response } from "express"
import { deletesendpixservice } from "../deletepixservice/deletepixservice"


class deletesendpixcontroller{
      async handle(req:Request, res:Response){

         const uid_user = req.query.uid_user as string
         const uid_transacao = req.query.uid_transacao as string
         const deletepix = new deletesendpixservice()
         const deletesend = await deletepix.execute({uid_transacao,uid_user})

         return res.json(deletesend)

           
      }
}
export{deletesendpixcontroller}