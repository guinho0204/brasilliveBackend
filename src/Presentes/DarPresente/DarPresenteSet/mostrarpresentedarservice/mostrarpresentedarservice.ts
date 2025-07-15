import { prismaCli } from "../../../../prisma/conection";

interface MostrarDarRequest{
    uuid_live: string;
}
class mostrarpresentedarservice{
    async execute({uuid_live}:MostrarDarRequest){
        
        
        const mostrarpresentedar = await prismaCli.recebe_presentes.findMany({
            where:{
                Uid_user_recebe:uuid_live
            },
            select:{
                Nome:true,
                Uid_user_dando:true,
                Uid_user_recebe:true,
                Imagem_presente:true,
                Valor:true,
            }
        })
        
        return mostrarpresentedar
    }
}
export{mostrarpresentedarservice}