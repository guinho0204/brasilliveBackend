import { prismaCli } from "../../../prisma/conection";
import { hash } from "bcryptjs";
import admin from "../../../config/firebaseAdmin";

interface UserRequest{
    
     image_user:string;
     nome:string;
     user:string ;
     numero_celular:string;
     password:string;
     followers:string;
     following:string ;
     nivel:string;
     visualisacoes:string;
     saldo_money:string;
     descricao:string;
     pcoin_paga_meda_user:string;
     rcoin_recebe_moeda_user:string;
}
class createuserservice{
    async execute({ image_user,nome,user,numero_celular,password,followers,following,nivel,visualisacoes,saldo_money,descricao,pcoin_paga_meda_user,rcoin_recebe_moeda_user}:UserRequest){
           
       try{
        if(!numero_celular){
            throw new Error("Numero de celular errado")
        }

        const numero_celularExist = await prismaCli.user.findFirst({
            where:{
                Numero_celular:numero_celular
            }
               
        })

        if(numero_celularExist){
            throw new Error("Numero celular ja existente");
            
        }

        const passwordhash = await hash(password,8)
           
        const saldo = parseFloat(saldo_money)

        const createuser = await prismaCli.user.create({
             data:{
                 Image_user:image_user,
                 Nome:nome,
                 User:user,
                 Numero_celular:numero_celular,
                 Followers:followers,
                 Following:following,
                 Nivel:nivel,
                 Visualisacoes:visualisacoes,
                 Password:passwordhash,
                 Descricao:descricao,
                 Data_nascimento:'00/00/00',
                 Idade:'0',
                 Sexo:'indefinido',
                 Saldo_money:saldo,
                 Pcoin_paga_moeda_user:pcoin_paga_meda_user,
                 Rcoin_recebe_moeda_user:rcoin_recebe_moeda_user,   
            }
        })

       
         
        return{createuser}         
 

       }catch(err){
            console.log('Erro ao criar o user')
       }


        
          
    }
}
export{createuserservice}