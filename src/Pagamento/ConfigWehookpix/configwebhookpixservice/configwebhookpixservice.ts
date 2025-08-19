import { response } from 'express';
import EfiPay from 'sdk-typescript-apis-efi';
import { options_producao } from '../../../credenciais/options/options_producao';

interface paramentros{
    
}

class configwebhookpixservice{
   async execute(){
            

            options_producao['validateMtls'] = false

            const body = {
                webhookUrl: 'https://alert-charm-production.up.railway.app/webhook',
            };
            
            const params = {
                chave:'f5dcfcd8-08e4-47de-bfb3-20208e20c6a5',
            };
            
            const efipay = new EfiPay(options_producao);
            
         efipay.pixConfigWebhook(params, body)
            .then((resposta: Promise<any>) => {
                console.log(resposta);
            })
            .catch((error: Promise<any>) => {
                console.log(error);
            });
                 
   } 
}
export{configwebhookpixservice} 