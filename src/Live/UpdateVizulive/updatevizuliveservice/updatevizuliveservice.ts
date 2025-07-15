import { prismaCli } from "../../../prisma/conection"


interface UpdateRequest{
    uid_live:string;
    visulive:string;
}
class updatevizuliveservice{
   async execute({uid_live,visulive}:UpdateRequest){

           const visuliveint = parseInt(visulive)

           const updateVizu = await prismaCli.live.updateMany({
               where:{
                     Live_id:uid_live
               },
               data:{
                   VizuLive:visulive
               }
           })

           return updateVizu
   }
}
export{updatevizuliveservice}