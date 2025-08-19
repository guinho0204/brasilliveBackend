import { prismaCli } from "../../../../prisma/conection"


class settokenliveservice{
  async service(){
    
    const setToken  = await prismaCli.configLive.findFirst({

        select:{
            Token:true,
            AppId:true
        }
    })

    return setToken

  }
}
export {settokenliveservice}