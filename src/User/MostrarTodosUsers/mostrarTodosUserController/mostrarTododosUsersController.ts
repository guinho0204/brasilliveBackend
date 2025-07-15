import { Request,Response } from "express";
import { mostrarTodosUsersService } from "../mostrarUsersservice/mostrarTodosusersservice";

class mostrarTodosUserController{
     async handle(req:Request,res:Response){
        const mostarusersserive = new mostrarTodosUsersService
        const mostrartodos = await mostarusersserive.execute()
        return res.json(mostrartodos)
     }
}
export {mostrarTodosUserController}