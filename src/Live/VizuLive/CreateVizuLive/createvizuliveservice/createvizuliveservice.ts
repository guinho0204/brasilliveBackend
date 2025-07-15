import { prismaCli } from "../../../../prisma/conection"

interface CreateRequest{
    user:string;
    id_live:string;
    id_user:string;
    ativolive:string;
}

class createvizuliveservice{
    async execute({user,id_live,id_user,ativolive}:CreateRequest){
        const ceratevizu = await prismaCli.visuLive.create({
            data:{
                User:user,
                Id_live:id_live,
                Id_user:id_user,
                AtivoLive:ativolive,
            }
        })

        return ceratevizu
    }
}
export{createvizuliveservice}