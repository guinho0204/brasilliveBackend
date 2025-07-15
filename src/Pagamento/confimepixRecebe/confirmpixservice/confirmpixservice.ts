
import EfiPay from 'gn-api-sdk-typescript';

interface pixrequest{
    chavepix : string;
}
class confirmpixservice{
    
    async execute({chavepix}:pixrequest){

        const options = {
            // PRODUÇÃO = false
            sandbox: true,
            client_id: 'Client_Id_cf3fdb91ba5d9f911d12f80cb4c8b82202482861',
            client_secret: 'Client_Secret_cca1f8e9e42801f0d2d4e8f2a06b34def3c11931',
            certificate: './src/credenciais/producao-543436-jan_live.p12',
        };

        
        
        const params = {
            chave: chavepix,
        };
        
        const efipay = new EfiPay(options);
        
        efipay
            .pixDetailWebhook(params)
            .then((resposta: Promise<any>) => {
                console.log(resposta);
            })
            .catch((error: Promise<any>) => {
                console.log(error);
            }); 
        return "teste feitoo !!"           
    }
}
export{confirmpixservice}