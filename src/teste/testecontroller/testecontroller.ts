import { Payment, MercadoPagoConfig } from 'mercadopago';
import { Request,Response } from 'express';
import {sserver}

class testecontoller{
    async handle(){

        console.log(response)

        console.log('menssgem' , response.Status)

        const messagem = response
  
        io.emit('message',{status:response.Status});
        
      
        res.status(200).send({ success: true, message: 'Message sent' }); */
    }
}
export{testecontoller}