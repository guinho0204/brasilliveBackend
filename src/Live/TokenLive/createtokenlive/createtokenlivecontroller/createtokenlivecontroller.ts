import { Request,Response } from "express"
import { createtokenliveservice } from "../createtokenliveservice/createtokenliveservice"

class createtokenlivecontroller{
  async hanlde(req:Request,res:Response){

    const{token,appId} = req.body
    const createtokenservic = new createtokenliveservice()
    const create = await createtokenservic.execute({
        token,
        appId
    })

    return res.json(create)

  }
}
export{createtokenlivecontroller}