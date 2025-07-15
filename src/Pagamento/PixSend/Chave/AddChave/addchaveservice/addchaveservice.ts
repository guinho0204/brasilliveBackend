import { prismaCli } from "../../../../../prisma/conection";


interface chaveaddrequest{
    chave:string;
    uid_user:string;
    tipo:string;

}
class addchaveservice{
   async execute({chave,uid_user,tipo}:chaveaddrequest){
       const id_user = uid_user.toString()

         const addchave = await prismaCli.pixChaves.create({
            data:{
                Chave:chave,
                uid_user:id_user,
                tipo:tipo
            }
         })
         return addchave
   }
} 
export{addchaveservice}