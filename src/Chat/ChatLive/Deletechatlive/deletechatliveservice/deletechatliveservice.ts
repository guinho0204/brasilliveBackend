import { prismaCli } from "../../../../prisma/conection"


interface UidRequest{
    id_live:string;
}

class deletechatliveservice{
    async execute({id_live}:UidRequest){
       
        
        const deletechatLive = await prismaCli.chatLive.deleteMany({
            where:{
                Id_live:id_live
            }
            
            
        })
 
         return deletechatLive

    }
}
export{deletechatliveservice}