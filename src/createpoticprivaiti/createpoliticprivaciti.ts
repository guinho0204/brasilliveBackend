
import { Request,Response } from "express"
import path from 'path';

class ceratepolicprivacity{
    async handle(req:Request,res:Response){
        

        res.sendFile(path.join(__dirname, '..', 'createpoticprivaiti', 'index.html'));
        
    }
}
export {ceratepolicprivacity}