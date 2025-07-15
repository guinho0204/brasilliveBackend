import { error, timeStamp } from 'console';
import EfiPay from 'sdk-typescript-apis-efi';
import { prismaCli } from '../../../../prisma/conection';
import { options_producao } from '../../../../credenciais/options/options_producao';
import { options_homologacao } from '../../../../credenciais/options/options_homologação';



interface createpixRequest{
    valore:string;
    nome:string;
    cpf:string;
    uid_user:string;
    quantidade_moedas :string;
    idhash:string;
}
class createpixservice{
  async execute({uid_user,nome,valore,cpf,quantidade_moedas,idhash}:createpixRequest){
      

    const uid = uid_user.toString()
    try{

    const body = {
        calendario: {
            expiracao: 3600,
        },
        devedor: {
            cpf: '47804591845',
            nome:nome,
        },
        valor: {
            original:valore,
        },
        chave:'f5dcfcd8-08e4-47de-bfb3-20208e20c6a5', // Informe sua chave Pix cadastrada na efipay
        
    };
    
    const efipay = new EfiPay(options_producao);

      const response  =  await  efipay
        .pixCreateImmediateCharge([], body)
        .catch((error: Promise<any>) => {
            console.log(error);
        });
           const txid = response.txid
           const revisao  = response.revisao
           const status = response.status 
           const valor  = response.valor.original
           const chave = response.chave 
           const devedor_cpf = response.devedor.cpf
           const devedor_nome = response.devedor.nome 
           const loc_id  = response.loc.id
           const loc_location  = response.loc.location
           const loc_tipocob  = response.loc.tipoCob
           const loc_criacao  = response.loc.criacao
           const location  = response.location
           const pixCopiaEcola  = response.pixCopiaECola 
           const id_usuer = uid
          
           if(!response){
            console.log('não foi feito pagamento')
           }else{

            const pagamento =  await prismaCli.pagamentoPix.create({
                data:{ 
                        Txid : txid,
                        Revisao :revisao,
                        Status :status,
                        Valor :valor,
                        Chave :chave,
                        Devedor_cpf :devedor_cpf,
                        Devedor_nome :devedor_nome,
                        Loc_id :loc_id,
                        Loc_location :loc_location,
                        Loc_tipocob :loc_tipocob,
                        Loc_criacao :loc_criacao,
                        Location :location,
                        PixCopiaEcola :pixCopiaEcola, 
                        uid_user:id_usuer,
                        Quantidade_moedas:quantidade_moedas
                }
           })


           
           return pagamento
        }

}catch(err){
    console.log('error',err)
}

     }
  }

export{createpixservice}