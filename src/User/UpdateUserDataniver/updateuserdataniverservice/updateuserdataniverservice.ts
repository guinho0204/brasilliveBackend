import { prismaCli } from "../../../prisma/conection"

interface UpdateRequest{
    
    uid_live:string;
    idade:string;
    data_nascimento:string;
    sexo:string;

}
class updateuserdataniverservice{
   async execute({uid_live,idade,data_nascimento,sexo}:UpdateRequest){
      
      const  updateuser = await prismaCli.user.update({
            where:{
                Uid_live:parseInt(uid_live)
            },
            data:{
                Idade:idade,
                Data_nascimento:data_nascimento,
                Sexo:sexo

            }
      })

      return updateuser

   }
}
export{updateuserdataniverservice}