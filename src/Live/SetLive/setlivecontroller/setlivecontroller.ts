import { Request, Response } from "express";
import { setliveservice } from "../setliveservice/setliveservice";


class setlivecontroller{
    async handle(req:Request, res:Response){

         const uidlive = req.query.uidlive as string
         const setservice =  new setliveservice()
         const set = await setservice.execute({uidlive})  

        return res.json(set)
    }
}
export{setlivecontroller}