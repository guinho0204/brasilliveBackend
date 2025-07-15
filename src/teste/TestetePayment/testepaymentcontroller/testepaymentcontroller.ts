import { Request,Response } from "express";
import { Payment, MercadoPagoConfig } from 'mercadopago';
class testepaymentcontroller{
  async handle(req:Request,res:Response){
      /*
  
        payment.create({
            body: { 
                transaction_amount: req.transaction_amount,
                description: req.description,
                payment_method_id: req.paymentMethodId,
                    payer: {
                    email: req.email,
                    identification: {
                type: req.identificationType,
                number: req.number
            }}},
            requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
        })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
        */

        console.log(req.body)

  }
}
export{testepaymentcontroller}