import { prismaCli } from "../../../../prisma/conection"


interface mostrarpix{
    chavepix:string;
}
class mostrarpagamentopixservice{

    async service({chavepix}:mostrarpix){
        const mostrarpagamento = await prismaCli.pagamentoPix.findMany({
            where:{
                Chave:chavepix
            },
            select:{
                Chave:true,
                Devedor_cpf:true,
                Devedor_nome:true,
                Loc_criacao:true,
                Loc_id:true,
                Loc_location:true,
                Loc_tipocob:true,
                Location:true,
                PixCopiaEcola:true,
                Revisao:true,
                Status:true,
                Txid:true,
                uid_user:true,
                Uuid_transacao:true,
                Valor:true,
            }
        })
        return mostrarpagamento
    }
}
export{mostrarpagamentopixservice}