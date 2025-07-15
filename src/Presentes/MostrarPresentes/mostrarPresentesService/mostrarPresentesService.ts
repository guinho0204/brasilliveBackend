import { prismaCli } from "../../../prisma/conection"



class mostrarPresentesService{
    async execute(){
        
        const mostrarPresentes = await prismaCli.presentes.findMany({
            select:{
               Uuid_presente:true,
               Nome:true,
               Valor:true,
               Presente_imagem:true  
            }
        })
       
       return mostrarPresentes;
    }
}
export{mostrarPresentesService}