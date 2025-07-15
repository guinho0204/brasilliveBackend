import { prismaCli } from "../../../prisma/conection"


interface addmoneyRequest{
    val_money:string;
    uuid_live:string;
}
class adicionarmoneyservice{
    async execute({uuid_live,val_money}:addmoneyRequest){
    
       const valm = parseFloat(val_money)
       const uid = parseInt(uuid_live)
       
       const updatemoney = await prismaCli.user.update({
         where:{
            Uid_live:uid
         },
         data:{
             Saldo_money:valm
         }
       })

       const setMoney = await prismaCli.user.findMany({
          where:{
            Uid_live:uid,

          },select:{

            Data_create:true,
            Followers:true,
            Descricao:true,
            Image_user:true,
            Nivel:true,
            Following:true,
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
       return setMoney
    }
}
export{adicionarmoneyservice}