import { prismaCli } from "../../../../prisma/conection"

interface SeguindoRequest{
  
  id_user_ira_seguir:string;
}

class setseguindoservice{
    async service({id_user_ira_seguir}:SeguindoRequest){
      try{
        
        const setseguidor = await prismaCli.seguindo.findMany({
        where:{
            Id_user_ira_seguir:id_user_ira_seguir
        },
        select:{
          Id_user_ira_seguir:true,
        }
      })
     
      return setseguidor 
    }catch(err){
      
          console.log(err)
    }
    }
}
export {setseguindoservice}