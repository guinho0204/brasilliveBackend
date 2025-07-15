import { prismaCli } from "../../../prisma/conection";


interface convertRequest{
    uuid_user:string;
    valor:string;
}

class converterservice{
   async execute({uuid_user,valor}:convertRequest){
       const val = parseFloat(valor)
       const uid = parseInt(uuid_user)

       const convert = await prismaCli.user.update({
        where:{
             Uid_live:uid
        },
        data:{
            Saldo_money:val
        }
       })

       return convert
   }
}
export{converterservice}