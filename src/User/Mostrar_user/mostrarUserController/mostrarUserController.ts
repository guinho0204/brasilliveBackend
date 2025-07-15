import { Request,Response } from "express";
import { mostrarUsersService } from "../mostrarUserService/mostrarUsersService";


class mostrarUserController{
    async handle(req:Request,res:Response){
        const uuid_live = req.query.uuid_live as string
        const mostarUserService = new mostrarUsersService();
        const mostrar  =  await mostarUserService.execute({uuid_live});
         return res.json(mostrar)
    }
}

export{mostrarUserController}