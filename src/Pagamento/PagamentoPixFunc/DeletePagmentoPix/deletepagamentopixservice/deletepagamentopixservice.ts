import { prismaCli } from "../../../../prisma/conection";


interface UserPagamento{
    uid_pagamento:string;
}
class deletepagamentopixservice{
    async execute({uid_pagamento}:UserPagamento){

            const deletepixfeito  = await prismaCli.pagamentoPix.deleteMany({
                where:{
                    Uuid_transacao:uid_pagamento
                }
            })

            return deletepixfeito
    }
}

export { deletepagamentopixservice}