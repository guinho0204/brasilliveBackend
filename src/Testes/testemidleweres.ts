import { Request,Response } from "express"

class testemidllewares{
    async execute(req:Request,res:Response){

         const nome = req.query.teste
         console.log(nome)
    }
}
export{testemidllewares}