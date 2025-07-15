import { prismaCli } from "../../../../../prisma/conection"


interface ListRequest{
    uid_user:string;
}
class listchaveservice{
  async execute({uid_user}:ListRequest){

        const listlive  = await prismaCli.pixChaves.findMany({

            where:{
                uid_user:uid_user  
            },
             select:{
                Chave:true,
                uid_user:true,
                tipo:true,
                Uuid_chavepix:true
             }
        })

        return listlive
  }
}
export{listchaveservice}