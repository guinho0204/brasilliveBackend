import Express,{Request,Response,NextFunction, response} from 'express'
import { router } from './routes';
import cors from 'cors'
import path from 'path'
import 'express-async-errors'
import {Server} from 'socket.io'
import http from 'http'
import { testecontoller } from './teste/testecontroller/testecontroller';
import { prismaCli } from './prisma/conection';
import { error } from 'console';

const app = Express();
app.use(cors())
app.use(Express.json())
app.use(router);
app.use('/files',
Express.static(path.resolve(__dirname,'..','tmp')))
const server = http.createServer(app)
export const io = new Server(server)


const PORT = process.env.PORT || 3000

const userSocketMap = new Map<string, string>();


app.use((err: Error, req:Request,res:Response,next:NextFunction) =>{
      if(err instanceof Error){
            return res.status(400).json({
                  error:err.message
                  
            })
      }
      return res.status(500).json({
            status:'error',
            message:'Internal server error'
      })
})

app.post('/webhook/pix', async(req: Request, res: Response,) =>{

     
      const dados = req.body
      console.log(req.body)
  
      if(dados.pix[0].endToEndId && dados.pix[0].txid && dados.pix[0].chave && dados.pix[0].valor &&
             dados.pix[0].txid && dados.pix[0].valor && dados.pix[0].horario){
         
             console.log('este pagamento create imediatecharge')
             
            
            
            const updateapaix = await prismaCli.pagamentoPix.update({
                  where:{
                     Txid:dados.pix[0].txid
                  },
                  data:{
                      Status:'APROVADO',   
                  },
                  select:{
                        Chave:true,
                        Devedor_cpf:true,
                        Devedor_nome:true,
                        Loc_criacao:true,
                        Loc_location:true,
                        Loc_id:true,
                        Location:true,
                        PixCopiaEcola:true,
                        Loc_tipocob:true,
                        Revisao:true,
                        Txid:true,
                        uid_user:true,
                        Uuid_transacao:true,
                        Status:true,
                        Valor:true,
                        Quantidade_moedas:true

                  }

            }).then((resposta) =>{
                  io.emit("messagepixcreateimediate", [{ 
                        uid_user:resposta.uid_user,
                        Status:resposta.Status,
                        quantidade_moedas:resposta.Quantidade_moedas}]);

                        console.log('Pix feito com sucesso')
            })
           
                  




       }else{

            console.log("este pagamento é do sendpix")
       

            const response  = await prismaCli.pixSend.update({

            where:{EndToendId:dados.pix[0].endToEndId},

            data:{
                  Status:dados.pix[0].status
            },
            select:{
                  Chave:true,
                  EndToendId:true,
                  Hash_transacao:true,
                  Nome:true,
                  Status:true,
                  Horario:true,
                  Uid_user:true,
                  Uuid_pixsend:true,
                  Valor:true
            }
      })   
                  io.emit("messagepixsend", [{Uuid_pixsend:response.Uuid_pixsend,
                        Chave:response.Chave,
                        Nome:response.Nome,
                        Status:response.Status,
                        Valor:response.Valor,
                        Horario:response.Horario,
                        Hash_transacao: response.Hash_transacao,
                        Uid_user:response.Uid_user,
                        EndToendId:response.EndToendId,}]);
      
                  res.status(200).send({ success: true, message: 'Message sent' });
       }
                 
    });

    
    // Configuração do Socket.io
    io.on('connection', (socket) => {
      console.log('A user connected');

     socket.once('operacaoCamera',([{id_liveF,msg}]) =>{
            console.log(msg,id_liveF)
             io.emit("mensagemCamera",{id_liveF,msg})  

     })

     socket.once('presentes', ({ id_live, presente, valor, vezes, imagem_presente, uid_user }) => {
      console.log("infos:", id_live, presente, valor, vezes);
      io.emit("presentes", { id_live, presente, valor, vezes, imagem_presente, uid_user });
    });
     socket.once('ativalistavizu',(msg) =>{

           io.emit('ativalistavizu',msg)
           console.log(msg)
     })
     socket.once('enviamensagem',([{msg,id_live}])=>{
           io.emit('enviamensagem',{msg,id_live})
           console.log(msg+" e o id é "+ id_live)
     })

     socket.once("infolive", ([{ id_live, statuslive }]) => {
      console.log("infolive status", id_live, statuslive);
      io.emit("infolive", { id_live, statuslive }); // ou "recebeinfo"
    });

    socket.once("atualizarMoedas",(atualizar)=>{
        io.emit("atualizarMoedas",atualizar)
        console.log(atualizar)
    })
  
          socket.once('deleteMessage', (data) => {
            const { messageId } = data;
             console.log(messageId)
            // Lógica para excluir a mensagem do banco de dados ou memória
        
            // Emitindo um evento para todos os clientes informando que a mensagem foi excluída
            io.emit('messageDeleted', { messageId });
        }); 

      socket.on('disconnect', (reason) => {
        console.log('A user disconnected'+reason);
      });

      
        
        
});



server.listen(4070,()=>{
      console.log('server running na porta  4070')
})

