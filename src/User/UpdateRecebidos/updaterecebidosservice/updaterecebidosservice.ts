
import { prismaCli } from "../../../prisma/conection"

interface updateRecebidos{
    uid_user_recebe:string;
    valorTotal:string;

}
class updaterecebidosservice{
    async execute({uid_user_recebe,valorTotal}:updateRecebidos){
            
           const update = await prismaCli.live.update({
            where:{
                Live_id:uid_user_recebe
            },
            data:{
                RCoin_recebe_moeda_live:valorTotal
            }
           })
           
           const mostrarUpdate = prismaCli.live.findMany({
              where:{
                Live_id:uid_user_recebe
              },
              select:{
                Create_date:true,
                Live_id:true,
                Nome:true,
                Pcoin_paga_moeda_live:true,
                RCoin_recebe_moeda_live:true,
                uid_user:true,
                Uuid_live:true,
                Descricao:true,
                Image_live:true,
              }
           })
           return mostrarUpdate
    }
}
export{updaterecebidosservice}