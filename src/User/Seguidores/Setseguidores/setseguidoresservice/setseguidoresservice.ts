import { prismaCli } from "../../../../prisma/conection";

interface seguidoresRequest{
    id_user_ira_ser_seguido:string
    id_user_ira_seguir:string
}
class setseguidoresservice{
   async execute({id_user_ira_seguir,id_user_ira_ser_seguido}:seguidoresRequest){
     
       const setseguidor = await prismaCli.seguindo.findUnique({
         where:{
            Id_user_ira_ser_seguido_Id_user_ira_seguir:{
               Id_user_ira_seguir:id_user_ira_seguir,
               Id_user_ira_ser_seguido:id_user_ira_ser_seguido
            }
         },
         select:{
            Id_user_ira_seguir:true,
            Id_user_ira_ser_seguido:true,
            Nome_user_seguido:true,
            Status:true,
            Cor:true,
         }
       })
       
       return setseguidor
   }
}
export{setseguidoresservice}