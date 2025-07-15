import { prismaCli } from "../../../../prisma/conection";

interface Dar_presente{

   nome:string;
   uid_user_recebe:string;
   uid_user_dando:string;
   valor:string;
   vezes:string;
   imagem_presente:string;
}
class darpresenteservice{
    async execute({nome,uid_user_dando,uid_user_recebe,valor,vezes,imagem_presente}:Dar_presente){

       

        const darpresent = await prismaCli.recebe_presentes.create({
            data:{
                Nome:nome,
                Uid_user_dando:uid_user_dando,
                Uid_user_recebe:uid_user_recebe,
                Valor:valor,
                Vezes:vezes,
                Imagem_presente:imagem_presente,

            }
        })
         
        return darpresent
    }

}
export{darpresenteservice}