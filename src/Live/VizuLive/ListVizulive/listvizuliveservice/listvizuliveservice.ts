import { prismaCli } from "../../../../prisma/conection"

interface ListVizuRequest{
    id_live:string;
}

class listvizuliveservice{
   
    async execute({id_live}:ListVizuRequest){
        
        const Listvizu = await prismaCli.visuLive.findMany({
            where:{
                Id_live:id_live
            },
            select:{
                AtivoLive:true,
                Id_live:true,
                Id_user:true,
                User:true,
            }
        })
         
        return Listvizu


    }
}
export{listvizuliveservice}