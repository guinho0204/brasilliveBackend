
import EfiPay from "sdk-typescript-apis-efi";
import { options_producao } from "../../../credenciais/options/options_producao";
import { response } from "express";
import { prismaCli } from "../../../prisma/conection";

interface pixrequest{
    idhash : string; 
    chave:string;
    valor:string;
    id_user:string;
    nome:string;
}
class pixsendservice{
    async execute({idhash,chave,valor,id_user,nome}:pixrequest){
    try{
        options_producao['validateMtls'] = false

         const val = parseFloat(valor)

        const params = {
            idEnvio: idhash,
        };
        
        const id = parseInt(id_user)

        const body = {
            valor: valor,
            pagador: {
                chave: 'f5dcfcd8-08e4-47de-bfb3-20208e20c6a5',
            },
            favorecido: {
                chave: chave,
            },
        };
        
        const efipay = new EfiPay(options_producao);
        
       const response =  await  efipay
            .pixSend(params, body)
            .catch((error: Promise<any>) => {
                console.log(error);
            });
        console.log(response)
        console.log(response.idEnvio)
        console.log(response.e2eId)
        console.log(response.valor)
        console.log(response.status) 
        console.log(response.horario)
       
    
        const createsendpix = await prismaCli.pixSend.create({

            data:{
                Chave:'47804591845',
                Hash_transacao:idhash,
                Horario:'etste',
                Status:'tetse',
                Uid_user:'teste',
                Valor:'teste',
                Nome:'teste',
                EndToendId:'686763637837'
            }
        })

   
        
        return createsendpix

    }catch(err){
        console.log(err)
    }
    }
}
export{pixsendservice}