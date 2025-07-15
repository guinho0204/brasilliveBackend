
import { prismaCli } from "../../../../prisma/conection"

interface MostrarMensagemrRquest{
    Menssagem_id :string;
}

 class mostrarMenssagemService{
       async execute({Menssagem_id}: MostrarMensagemrRquest){
          const mostrarMenssagem = await prismaCli.menssagem.findMany({
             where:{
                Menssagem_id:Menssagem_id
             }
          })
          return mostrarMenssagem;
       }
 }
 export{mostrarMenssagemService}