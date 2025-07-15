import { prismaCli } from "../../../prisma/conection";
import admin from "../../../config/firebaseAdmin";
interface UpdateRequest{
    uid_live:string;
    image_user:string;
    nome:string;
}
class updateuserimagemservice{
    async execute({uid_live,image_user,nome}:UpdateRequest){
         const updateImage =  await prismaCli.user.update({
             where: {
                 Uid_live: parseInt(uid_live)
             },
             data:{
                Image_user:image_user
             }
         })
          
         const message = {
            notification: {
              title: nome+'Entrou para o app',
              body: 'Não perca live de '+ nome+' ,seja o primeiro a prensentear'
            },
            topic: 'all'
          };
      
          try {
            const response = await admin.messaging().send(message);
            console.log('✅ Notificação enviada:', response);
          } catch (error) {
            console.error('❌ Erro ao enviar notificação:', error);
            throw error;
          }
      
         return updateImage
         
    }
}
export{updateuserimagemservice}