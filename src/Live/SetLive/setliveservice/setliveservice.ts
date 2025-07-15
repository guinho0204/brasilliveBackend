import { prismaCli } from "../../../prisma/conection"

interface SetLive{
    uidlive:string;
    
}
class setliveservice{
    async execute({uidlive}:SetLive){
      
       const setUser = await prismaCli.live.findMany({
                     
         where:{
            Live_id:uidlive
         },
         select:{
            Uuid_live:true,
            Create_date:true,
            Image_live:true,
            Descricao:true,
            RCoin_recebe_moeda_live:true,
            Nome:true,
            Pcoin_paga_moeda_live:true,
            Live_id:true, 
            uid_user:true, 
         }

       })
       return setUser;
    }
}
export{setliveservice}