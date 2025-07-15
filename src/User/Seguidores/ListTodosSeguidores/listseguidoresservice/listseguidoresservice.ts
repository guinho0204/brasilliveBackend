import { prismaCli } from "../../../../prisma/conection"

interface ListaSegRequest{
    id_user_ira_ser_seguido:string;
}

class listaseguidoresservice{
  async execute({id_user_ira_ser_seguido}:ListaSegRequest){
     
    const uid_user = parseInt(id_user_ira_ser_seguido)

      const lisatseg = await prismaCli.seguindo.findMany({
        where:{
          
            Id_user_ira_ser_seguido:id_user_ira_ser_seguido
        },
        select:{
            Id_user_ira_seguir:true,
            Id_user_ira_ser_seguido:true,
        }
      })
      return lisatseg
  }
}
export{listaseguidoresservice}