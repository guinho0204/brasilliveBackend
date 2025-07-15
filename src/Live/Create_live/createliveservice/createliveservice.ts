import { prismaCli } from "../../../prisma/conection";
import admin from "../../../config/firebaseAdmin";
import { title } from "process";

interface LiveRequest {
  image_live: string;
  descricao: string;
  live_id: number;
  rcoin_recebe_moeda_live: string;
  pcoin_paga_moeda_live: string;
  nome: string;
  uid_user: string;
  vizulive: string;
}

class createliveservice {
  async execute({
    image_live,
    descricao,
    live_id,
    vizulive,
    rcoin_recebe_moeda_live,
    pcoin_paga_moeda_live,
    nome,
    uid_user
  }: LiveRequest) {

    const liveid = live_id.toString();

    const setuser = await prismaCli.user.findUnique({
      where: {
        Uid_live: live_id
      },
      select: {
        Rcoin_recebe_moeda_user: true,
        // ... outros campos omitidos
      }
    });
    
    const id = 1 

    const createlive = await prismaCli.live.create({
      data: {
        Live_id:live_id.toString(),
        Descricao: descricao,
        Image_live: image_live,
        RCoin_recebe_moeda_live: setuser.Rcoin_recebe_moeda_user,
        Nome: nome,
        Pcoin_paga_moeda_live: pcoin_paga_moeda_live,
        uid_user: uid_user,
        VizuLive: vizulive
      }
    });

    const message = {
      notification: {
        title: nome+' criou uma live',
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

    return setuser;
  }
}

export { createliveservice };
