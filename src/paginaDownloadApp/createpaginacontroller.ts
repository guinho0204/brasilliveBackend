import { Request,Response } from "express";
import path from 'path';


class createpaginacontroller{
    async handle(req:Request,res:Response){
        
          res.sendFile(path.join(__dirname, '..', 'paginaDownloadApp', 'index.html')); 
        
    }
}
export {createpaginacontroller}