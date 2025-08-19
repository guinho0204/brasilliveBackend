import { prismaCli } from "../../../prisma/conection";
import {compare} from "bcryptjs"
import {sign} from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();



interface AuthRequest{
    numero_celular:string;
    password:string;
}
class Authuserservice{
     async execute({numero_celular,password}:AuthRequest){
        try{
         const login = await prismaCli.user.findFirst({
            where:{
                Numero_celular:numero_celular,
                
            }
         })
          if(!login){
             throw new Error("User password / incorrect")
          }
           const passwordMarsh = await compare(password, login.Password);

           if(!passwordMarsh){
            throw new Error('user / password incorrect')
           }

          const token = sign(
            {
            Uuid_user:login.Uuid_user,    
            image_user:login.Image_user,        
            nome:login.Nome,
            user:login.User,
            numero_celular:login.Numero_celular,
            followers:login.Followers,
            following:login.Following,
            nivel:login.Nivel,
            visualisacoes:login.Visualisacoes,
            data_create:login.Data_create,
            Saldo_money:login.Saldo_money,
            uid_live:login.Uid_live,
            rcoin_recebe_moeda_user:login.Rcoin_recebe_moeda_user
            
           },
           process.env.SECRET_JWT,{
            subject:login.Uuid_user,
            expiresIn:'30d'
           }
           )

          return{ 
            Uuid_user:login.Uuid_user,
            image_user:login.Image_user,
            nome:login.Nome,
            user:login.User,
            numero_celular:login.Numero_celular,
            followers:login.Followers,
            following:login.Following,
            nivel:login.Nivel,
            visualisacoes:login.Visualisacoes,
            data_create:login.Data_create,
            Saldo_money:login.Saldo_money,
            uid_live:login.Uid_live,
            rcoin_recebe_moeda_user:login.Rcoin_recebe_moeda_user,
            token:token}

          }catch(err){
              throw new Error('erro ao fazer login')
          }
     }
}
export{Authuserservice}