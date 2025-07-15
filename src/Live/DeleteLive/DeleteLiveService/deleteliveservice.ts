import { prismaCli } from "../../../prisma/conection"


interface DeleteRequest{
    uidlive:string;
}
class deletliveservice{
      async execute({uidlive}:DeleteRequest){
          
        

         const deletelive = await prismaCli.live.deleteMany({
            where:{
                Live_id:uidlive
            }
         })

         return deletelive
      }
      
}
export{deletliveservice}