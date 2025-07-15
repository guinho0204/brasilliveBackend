import { prismaCli } from "../../../../prisma/conection"

interface deletePixsend{
   
    uid_user:string;
    uid_transacao:string;

}
class deletesendpixservice{
    async execute({uid_user,uid_transacao}:deletePixsend){
        
        const deletetransacao = await prismaCli.pixSend.delete({
            where:{
                Uuid_pixsend:uid_transacao,
                Uid_user:uid_user
            }
        })

        return deletetransacao + 'Deletou com sucesso'

    }  
}
export{deletesendpixservice}
