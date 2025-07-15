import { prismaCli } from "../../../../prisma/conection";

class mostrartodosservice{
    async execute(){
        const mostratodos = await prismaCli.live.findMany({
            select:{
                Uuid_live:true,
                Image_live:true,
                Descricao:true,
                Live_id:true,
                RCoin_recebe_moeda_live:true,
                Nome:true,
                uid_user:true,
                Pcoin_paga_moeda_live:true,
            }
        })
        return mostratodos
    }
}
export{mostrartodosservice}