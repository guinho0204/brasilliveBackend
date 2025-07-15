import { Request,Response } from "express"
import { mostrartodosservice } from "../mostrartodosservice/mostrartodosservice"
class mostrartodoscontroller{
   async handle(req:Request,res:Response){
       const mostraservice = new mostrartodosservice();
       const service = await mostraservice.execute()

       return res.json(service);
  }
}
export{mostrartodoscontroller}