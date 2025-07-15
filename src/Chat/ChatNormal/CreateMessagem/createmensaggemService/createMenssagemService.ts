import { prismaCli } from "../../../../prisma/conection";
interface UserMenssagem{
   
    remetente : string;
    destinatario: string;
    menssagem: string;
    menssagem_id : string;
}

class createMenssagemService{
    async execute({remetente, destinatario,menssagem, menssagem_id}:UserMenssagem){

        const createMenssagem  = await prismaCli.menssagem.create({
            data:{
                Remetente:remetente,
                Destinatario:destinatario,
                Menssagem:menssagem,
                Menssagem_id:menssagem_id
            }
        })   
   
        return createMenssagem;

    }
}
export{createMenssagemService}