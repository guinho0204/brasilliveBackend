import { prismaCli } from "../../../prisma/conection"


interface webhooksendRuest{
     endToEndId:string;
     chave:string;
     tipo:string;
     status:string;
     valor:string;
     horario:string;
}
class webhooksendservice{
    async execute({endToEndId,chave,tipo,status,valor,horario}:webhooksendRuest){
        
        if(tipo == undefined){
            console.log('este é o createimediatecharge')
            status = 'aprovado'
            
            const updatePix =  await prismaCli.pagamentoPix.updateMany({
                where:{
                    Chave:chave
                },
                data:{
                    Status:'aprovado'
                }
                    
            })
              return updatePix

        }else if(status == 'REALIZADO'){
            console.log('este é o sendpix')
            

        }
         
        

        return {endToEndId,chave,tipo,status,valor,horario}
    }
}
export{webhooksendservice}