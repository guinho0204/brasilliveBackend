/*import { Request,Response } from "express";
import { createpagamentoservice } from "../createpagamentoservice/createpagamentoservice";
import EfiPay from 'sdk-typescript-apis-efi';
import { createmoedasservice } from "../../../../../User/Moedas/CreateMoeda/createmoedaservice/createmoedaservice";


class createpagamentocontroller{

    async handle(req:Request,res:Response){
          const{uuid_user,nome_user,pcoin_paga_moeda,valor,brand,number_card,cvv,expirationMonth,expirationYear} = req.body
          const createpagamento = new createpagamentoservice()
          const create =  await createpagamento.execute({brand,number_card,cvv,expirationMonth,expirationYear})
         
          const options  = {
            // PRODUÇÃO = false
            // HOMOLOGAÇÃO = true
            sandbox: true,
            client_id: 'Client_Id_bda20b173857db2d8a9910c82b713ce6c0bdcf7a',
            client_secret: 'Client_Secret_f032e9e9b6fc818a1bd4cc5a16f48596bef33121',
            certificate: '/home/marcos/Downloads/jan_live-v0.0.1_backend-main/src/credenciais/homologacao-585762-janlive.p12',
	
        };
        var payment_token = await create.payment_token
        
         console.log(payment_token)
          
         var moeda = parseInt(pcoin_paga_moeda)
         var valo = parseInt(valor)

         console.log(valo)

        let body = {
            payment: {
                credit_card: {
                    installments: 1,
                    payment_token: payment_token,
                    billing_address: {
                        street: 'Street 3',
                        number: 10,
                        neighborhood: 'Bauxita',
                        zipcode: '35400000',
                        city: 'Ouro Preto',
                        state: 'MG',
                    },
                    customer: {
                        name: nome_user,
                        email: 'oldbuck@efipay.com.br',
                        cpf: '94271564656',
                        birth: '1977-01-15',
                        phone_number: '5144916523',
                    },
                },
            },
        
            items: [
                {
                    name: 'Moedas',
                    value: 1,
                    amount: valo,
                },
            ],
            
        }
         
        const efipay = new EfiPay(options)
        
        const response = await efipay.createOneStepCharge([], body)
            .then((resposta: any) => {
                console.log(resposta)
                const createmoedaserv = new createmoedasservice()
                const createmoeda =  createmoedaserv.execute({uuid_user,pcoin_paga_moeda})
                const responsed = `${createmoeda} - ${resposta}`
                return res.json(resposta)
                
            })
            .catch((error) => {
                console.log(error)
                return "error ao criar"
            })
          

            
        }
}
export{createpagamentocontroller} */
