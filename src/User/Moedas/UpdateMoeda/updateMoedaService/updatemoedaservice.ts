import { prismaCli } from "../../../../prisma/conection";

interface Updatemoeda{
    uid_live:string;
    Pcoin_paga_moeda_user:string;
}
class updatemoedaservice{
      async execute({uid_live,Pcoin_paga_moeda_user}:Updatemoeda){

         const uid = parseInt(uid_live)

         const updatemoeda = await prismaCli.user.updateMany({
            where:{
                Uid_live:uid
            },
            data:{
              Pcoin_paga_moeda_user:Pcoin_paga_moeda_user
            }
         })

         const setUpdate  = await prismaCli.user.findMany({
            where:{
                Uid_live:uid,
                
            },
            select:{
                Data_create:true,
                Descricao:true,
                Followers:true,
                Following:true,
                Image_user:true,
                Nivel:true,
                Nome:true,
                Numero_celular:true,
                Pcoin_paga_moeda_user:true,
                Rcoin_recebe_moeda_user:true,
                Saldo_money:true,
                Uid_live:true,
                Uuid_user:true,
                Visualisacoes:true,

            }
         })

          return setUpdate

      }
}
export {updatemoedaservice}