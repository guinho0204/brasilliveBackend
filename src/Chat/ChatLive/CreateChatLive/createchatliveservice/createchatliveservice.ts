import { prismaCli } from "../../../../prisma/conection"

interface ChatRequest{
    
        user:string;
        id_live:string;
        id_user:string;
        menssagem:string;
        valor_presente:string;
        vezes:string;
        icon_presente:string;
        create_at:string;
}

class createchatliveservice{
    async execute({user,id_live,id_user,menssagem,valor_presente,vezes,icon_presente,create_at}:ChatRequest){
     
       try{
         const createchat = await prismaCli.chatLive.create({
            data:{
               User:user,
               Id_live:id_live,
               Id_user:id_user,
               Menssagem:menssagem,
               Valor_presente:valor_presente,
               Vezes:vezes,
               Icon_presente:icon_presente,
               Create_at :create_at
            }
         })
        
         return createchat

       }catch(err){

         console.log(err)

       }
         

    }
}
export{createchatliveservice}