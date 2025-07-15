import { prismaCli } from "../../../prisma/conection";

interface MostraRequest{
    uuid_live:string;
}

class mostrarUsersService{
    
     async execute({uuid_live}:MostraRequest){

       const user = await prismaCli.user.findUnique({
       where:{
            Uid_live:parseInt(uuid_live)
       },
       select:{
         Uuid_user:true,
         Image_user:true,
         Nome:true,
         User :true,
         Password:true,
         Followers:true,
         Following:true,
         Nivel:true,
         Visualisacoes:true,
         Data_create:true,
         Rcoin_recebe_moeda_user:true,
         Pcoin_paga_moeda_user:true,
         Uid_live:true,
         Numero_celular:true,
         Descricao:true,
         Saldo_money:true,  
       }
       
       })

       return user;
    }
}
export{mostrarUsersService}