import { settokenliveservice } from "../settokenliveservice/settokenliveservice"
import { Request,Response } from "express"
class settokencontroller{
  async handle(req:Request,res:Response){
    
    
    const settokenservic = new settokenliveservice()
    const settokenliveserv = await settokenservic.service()
    return res.json(settokenliveserv)

  }   
}
export {settokencontroller}