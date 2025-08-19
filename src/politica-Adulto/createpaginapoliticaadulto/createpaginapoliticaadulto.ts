import { Request,Response } from "express";
import path from 'path';


class createpaginapoliticaadulto{
    async handle(req:Request,res:Response){
        res.sendFile(path.join(__dirname, '..', '.', 'index.html'));
    }
}
export{createpaginapoliticaadulto}