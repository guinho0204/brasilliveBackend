import { Request,response } from "express"

export function midllewaruser(req:Request,res:Response){

    const user = req.query.id_user_payment

    console.log(user)
    
}