
import { prismaCli } from "../../../../prisma/conection"


interface DeletePresente{
    uuid_dar_presente:string;
}
class darpresentedeleteservice{
    async execute({uuid_dar_presente}:DeletePresente){
         const uid = parseInt(uuid_dar_presente)
          const deletepresente = await prismaCli.recebe_presentes.deleteMany({
            where:{
               Uid_user_recebe:uuid_dar_presente
            },
            
          })
          const select  =  await  prismaCli.recebe_presentes.findMany({
            where:{
              Uid_user_recebe:uuid_dar_presente
            },
            select:{
              Nome:true,
              Valor:true,
              Imagem_presente:true,
              Uid_user_recebe:true,
              Uid_user_dando:true,
              Vezes:true,
            }
          })
          return select
    }
}
export {darpresentedeleteservice}