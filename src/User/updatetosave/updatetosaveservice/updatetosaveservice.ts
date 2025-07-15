import { prismaCli } from "../../../prisma/conection";

interface RequestUpsave{
     
  uid_user_recebe:string;
  valor:string;
}
class updatetosaveservice{
   async execute({uid_user_recebe,valor}:RequestUpsave){
       const uid = parseInt(uid_user_recebe)
         await prismaCli.user.update({
        where:{
            Uid_live:uid
        },
        data:{
            Rcoin_recebe_moeda_user:valor
        }
       })
       const setUpdat  = await prismaCli.user.findMany({
        where:{
            Uid_live:uid
        },
        select:{
             Data_create:true,
             Descricao:true,
             Followers:true,
             Image_user:true,
             Nivel:true,
             Following:true,
             Nome:true,
             Numero_celular:true,
             Pcoin_paga_moeda_user:true,
             Rcoin_recebe_moeda_user:true,
             Saldo_money:true,
             Uid_live:true,
             Visualisacoes:true,
             Uuid_user:true
        }
       })
       return setUpdat
   }
}
export{updatetosaveservice}