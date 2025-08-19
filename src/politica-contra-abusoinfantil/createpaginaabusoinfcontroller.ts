import { Request,Response } from "express";
import path from 'path';


class createpaginaabusoinfantilcontroller{
    async handle(req:Request,res:Response){
        res.sendFile(path.join(__dirname, '..', 'politica-contra-abusoinfantil', 'index.html'));
    }
}
export{createpaginaabusoinfantilcontroller}