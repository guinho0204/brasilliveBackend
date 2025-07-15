import { prismaCli } from "../../../../prisma/conection"


interface UpdatePagamentoRequest{
    uid_pagamento: string;
    status:string;
    
}
class updatepagamentoservice{
    async execute({uid_pagamento,status}:UpdatePagamentoRequest){
       
        const updatePagamento = await prismaCli.pagamentoPix.update({
            where:{
                Uuid_transacao:uid_pagamento,
            },
            data:{
                Status:status
            }
        })
        
        const mostrarupdate  = await prismaCli.pagamentoPix.findMany({
             where:{
                Uuid_transacao:uid_pagamento
             },
             select:{
                Status:true
             }
        })
        return mostrarupdate
    }
}
export{updatepagamentoservice}