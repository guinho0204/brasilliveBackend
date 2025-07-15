import { prismaCli } from "../../../../prisma/conection"

interface getSeguidor{
   id_user_ira_ser_seguido:string;
}
class createseguidoresservice{
    async execute({id_user_ira_ser_seguido}:getSeguidor){


       
       const createseguidores = await prismaCli.seguindo.findMany({
        where:{
            Id_user_ira_ser_seguido:id_user_ira_ser_seguido
        },
        select:{
            Id_user_ira_seguir:true
        }
       })
       return createseguidores

    }
}
export{createseguidoresservice}