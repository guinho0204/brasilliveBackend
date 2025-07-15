import { prismaCli  } from "../../../../../prisma/conection"


interface DeletechaveRequest{
    uid_chavepix:string;
    
}
class Deletechaveservice{
    async execute({uid_chavepix}:DeletechaveRequest){
        
        console.log(uid_chavepix)
        const deletechave = await prismaCli.pixChaves.deleteMany({
            where:{
                Uuid_chavepix:uid_chavepix
            }
            
        })
        
        return deletechave
        

    }
}
export{Deletechaveservice}