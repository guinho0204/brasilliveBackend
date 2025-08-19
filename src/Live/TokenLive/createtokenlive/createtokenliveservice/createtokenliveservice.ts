import { app } from "firebase-admin";
import { prismaCli } from "../../../../prisma/conection"

interface CreatetokenRequest{
    token:string;
    appId:string;
}
class createtokenliveservice{
    async execute({token,appId}:CreatetokenRequest){
        
        const createtoken = await prismaCli.configLive.create({
            data:{
                Token:token,
                AppId:appId
            }
         })

         return createtoken

    }
}
export{createtokenliveservice}