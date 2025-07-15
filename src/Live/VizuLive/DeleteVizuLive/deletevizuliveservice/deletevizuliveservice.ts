
import { prismaCli } from "../../../../prisma/conection";


interface DeletevizuRequest{
    id_live:string;
    id_user:string;
}
class deletevizulivservice{
    async execute({id_live,id_user}:DeletevizuRequest){
       
        const deleetvisu = await prismaCli.visuLive.deleteMany({
            where:{
                Id_live:id_live,
                Id_user:id_user
            }
        })

        return deleetvisu

    }
}
export {deletevizulivservice}