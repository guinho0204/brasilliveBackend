import { prismaCli } from "../../../../prisma/conection";


interface DeleteRequest{
    id_user_ira_ser_seguido:string;
    id_user_ira_seguir:string;
}

class deleteseguindoservice{
  async execute({id_user_ira_seguir,id_user_ira_ser_seguido}:DeleteRequest){
    
     const deleteservice = await prismaCli.seguindo.deleteMany({
        where:{
           Id_user_ira_seguir:id_user_ira_seguir,
           Id_user_ira_ser_seguido:id_user_ira_ser_seguido
        }
     })
     const setUser = await prismaCli.seguindo.findMany({
       where:{
          Id_user_ira_seguir:id_user_ira_seguir,
          Id_user_ira_ser_seguido:id_user_ira_ser_seguido
       }
     })
     return setUser

  }
}
export{deleteseguindoservice}