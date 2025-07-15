

import { prismaCli } from "../../../../prisma/conection"

interface UidRequest{
    id_live:string;
}

class mostrachatliveservice{
    async execute({id_live}:UidRequest){
       
        const id = parseInt(id_live)
        
        const mostrachat = await prismaCli.chatLive.findMany({
            where:{
                Id_live:id_live
            },
            orderBy:{
                Id_menssagem:'desc'
            },
            select:{
                 Icon_presente:true,
                 Id_live:true,
                 Id_user:true,
                 Menssagem:true,
                 User:true,
                 Uuid_chatlive:true,
                 Valor_presente:true,

            }
        })
 
         return mostrachat

    }
}
export{mostrachatliveservice}