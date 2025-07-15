import { prismaCli } from "../../../../prisma/conection";

interface MoedaRequest{
    uuid_user:string;
    pcoin_paga_moeda:string;  
}
class createmoedasservice{
   async execute({uuid_user,pcoin_paga_moeda}:MoedaRequest){
       const updateMoedas = await prismaCli.user.update({
         where:{
            Uuid_user:uuid_user
         },
         data:{
             Pcoin_paga_moeda_user:pcoin_paga_moeda
         }
       })
       const setUpdate  = await prismaCli.user.findMany({
        where:{
            Uuid_user:uuid_user
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
export{createmoedasservice}