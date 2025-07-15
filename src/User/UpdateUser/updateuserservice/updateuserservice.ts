import { prismaCli } from "../../../prisma/conection"


interface updateuserRequest{
      user:string;
      uid_user:string;
      image_user:string;
}
class updateuserservice{
  async execute({user,uid_user,image_user}:updateuserRequest){

    try{
      const uid = parseInt(uid_user)
      const updaeuser = await prismaCli.user.updateMany({
        where:{
            Uid_live:uid
        },
        data:{
            Nome:user,
            Image_user:image_user,
        }
      })
      
      
      return updaeuser
    }catch(err){
      console.log(err)
    }
   
  }
}
export{updateuserservice}