import { Request,Response, query } from "express"
import { darpresentedeleteservice } from "../darpresentedeleteservice/darpresentedeleteservice"
class darpresentedeletecontroller{
    async handle(req:Request,res:Response){
         const uuid_dar_presente = req.query.uuuid_dar_presente as string
         const darpresentedel = new  darpresentedeleteservice()
         const dardeletepres = await darpresentedel.execute({
            uuid_dar_presente
         })
         return res.json(dardeletepres)
    }
}
export{darpresentedeletecontroller}