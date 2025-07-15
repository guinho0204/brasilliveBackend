import { prismaCli } from "../../../prisma/conection";

interface PresenteRquest{
    valor: string;
    presente_imagem:string;
    nome: string;
    
}

class createPresenteService{
    async execute({nome,valor,presente_imagem,}:PresenteRquest){
           
       const creatpresent = await prismaCli.presentes.create({
           data:{
                Valor:valor,
                Presente_imagem:presente_imagem,
                Nome:nome,
                
           }
       })
        return creatpresent;
    }
}
export{createPresenteService}