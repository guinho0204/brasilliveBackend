
import { prismaCli } from "../../../../prisma/conection";

interface Userquest{
  id_user_ira_ser_seguido:string;
  id_user_ira_seguir:string;
  nome_seguido:string;
  statused:string
}
class createseguindoservice{
    async execute({id_user_ira_ser_seguido,id_user_ira_seguir,nome_seguido,statused}:Userquest){
      try{
         
          const createseguidores = await prismaCli.seguindo.create({
            data:{
               Id_user_ira_seguir:id_user_ira_seguir,
               Id_user_ira_ser_seguido:id_user_ira_ser_seguido,
               Nome_user_seguido:nome_seguido,
               Status:statused,
               Cor:'teste'
            }
          }) 

          const setseguidor = prismaCli.seguindo.findMany({
            where:{
              Id_user_ira_seguir:id_user_ira_seguir,
               Id_user_ira_ser_seguido:id_user_ira_ser_seguido
            }
          })

          return setseguidor

      }catch(err){
        console.log(err+"erro ao criar seguidor ou usuraio ja segue")
      }
      
    }
    
}
export{createseguindoservice}