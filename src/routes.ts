import { Router } from "express";
import { createusercontroller } from "./User/CreateUser/createusercontroller/createusercontroller";
import { Authusercontroller } from "./User/AuthUser/Authusercontroller/Authusercontroller";
import { mostrarUserController } from "./User/Mostrar_user/mostrarUserController/mostrarUserController";
import { createMenssagemController } from "./Chat/ChatNormal/CreateMessagem/createmenssagemController/createMenssagemController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { mostrarMensagemController } from "./Chat/ChatNormal/Mostrar_Menssagens/mostrarMenssagemController/mostrarMensagemController";
import { createPresentesController } from "./Presentes/CreatePresentes/createPresentesController/createPresentesController";
import { mostrarPresentesController } from "./Presentes/MostrarPresentes/mostrarPresentesController/mostrarPresentesController";
import { createlivecontroller } from "./Live/Create_live/createlivecontroller/createlivecontroller";
import { setlivecontroller } from "./Live/SetLive/setlivecontroller/setlivecontroller";
import { mostrartodoscontroller } from "./Live/SetLive/mostrartodos/mostrartodoscontroller/mostrartodoscontroller";
import { deletelivecontroller } from "./Live/DeleteLive/DeleteLivecontroller/deletelivecontroller"; 
//import { createpagamentocontroller} from './Pagamento/CreatePagComp/CreatePag/createPagamento/createpagamentocontroller/createpagamentocontroller'
import { createpixcontroller } from "./Pagamento/PagamentoPixFunc/CreatePagamento/createpagpixcontroller/createpixcontroller";
import { createseguindocontroller } from "./User/Seguindo/CreateSeguindo/createseguindocontroller/createseguidorescontroller";
import { setseguindocontroller } from "./User/Seguindo/SetSeguindo/setseguindocreatecontroller/setseguindocontroller";
import { deleteseguindocontroller } from "./User/Seguindo/DeleteSeguindo/deleteseguindocontroller/deleteseguindocontroller";
import { updatemoedacontroller } from "./User/Moedas/UpdateMoeda/updateMoedacontroller/updatemoedacontroller";
import { mostrarTodosUserController } from "./User/MostrarTodosUsers/mostrarTodosUserController/mostrarTododosUsersController";
import { updaterecebidoscontroller } from "./User/UpdateRecebidos/updaterecebidoscontroller/updaterecebidoscontroller";
import { darpresentecontroller } from "./Presentes/DarPresente/DarPresenteCreate/darpresentecontroller/darpresentecontroller";
import { updatesavecontroller } from "./User/updatetosave/updatetosavecontroller/updatesavecontroller";
import { convertercontroller } from "./User/ConverterMoedas/convertercontroller/covertercontroller";
import { adicionarmoneycontroller } from "./User/AdicionarMoney/adicionarmoneycontroller/adicionarmoneycontroller";
import { createmoedacontroller } from "./User/Moedas/CreateMoeda/createmoedacontroller/createmoedacontroller";
import { mostrarpresentedarcontroller } from "./Presentes/DarPresente/DarPresenteSet/mostrarpresentedarcontroller/mostrarpresentedarcontroller";
import { darpresentedeletecontroller } from "./Presentes/DarPresente/DarPresentDelete/darpresentedeletecontroller/darpresentedeletecontroller";
import { createseguidorescontroller } from "./User/Seguidores/CreateSeguidores/createseguidorescontroller/createseguidorescontroller";
import { setseguidorescontroller } from "./User/Seguidores/Setseguidores/setseguidorescontroller/setseguidorescontroller";
import { updateusercontroller } from "./User/UpdateUser/updateusercontroller/updateusercontroller";
import { confirmpixcotroller } from "./Pagamento/confimepixRecebe/confirmpixcontroller/confirmpixcontroller";
import { pixsendcontroller } from "./Pagamento/PixSend/pixsendcontroller/pixsendcontroller";
import { configpixwebhookcontroller } from "./Pagamento/ConfigWehookpix/configwebhookpixcontroller/configwebhookpixcontroller";
import { webhookcontroller } from "./Pagamento/Webhook/webhookcontroller/webhookcontroller";
import { deletepagamentopixcontroller } from "./Pagamento/PagamentoPixFunc/DeletePagmentoPix/deletepagamentopixcontroller/deletepagamentopixcontroller";
import { updatepagamentocontroller } from "./Pagamento/PagamentoPixFunc/UpdatePagamento/updatepagamentocontroller/updatepagamentocontroller";
import { mostrarpagamentopixcontroller } from "./Pagamento/PagamentoPixFunc/MostrarPagamento/mostrarpagamentopixcontroller/mostrarpagamentopixcontroller";
import { addchavecontroller } from "./Pagamento/PixSend/Chave/AddChave/addchavecontroller/addchavecontroller";
import { listchavecontroller } from "./Pagamento/PixSend/Chave/ListChave/listchavescontroller/listchavecontroller";
import { Deletechavecontroller } from "./Pagamento/PixSend/Chave/DeleteChave/Deletechavecontroller/Deletechavecontroller";
import { deletesendpixcontroller } from "./Pagamento/PixSend/DeletPix/deletepixcontroller/deletepixcontroller";
import { createchatlivecontroller } from "./Chat/ChatLive/CreateChatLive/createchatlivecontroller/createchatlivecontroller";
import { deletechatlivecontroller } from "./Chat/ChatLive/Deletechatlive/deletechatlivecontroller/deletechatlivecontroller";
import { mostrachatlivecontroller } from "./Chat/ChatLive/MostreChatLive/mostrachatlivecontroller/mostrachatlivecontroller";
import { updatevizulivecontroller } from "./Live/UpdateVizulive/updatevizulivecontroller/updatevizulivecontroller";
import { createvizulivecontroller } from "./Live/VizuLive/CreateVizuLive/createvizulivecontroller/createvizulivecontroller";
import { listvizulivecontroller } from "./Live/VizuLive/ListVizulive/listvizulivecontroller/listvizulivecontroller";
import { deletevizulivecontroller } from "./Live/VizuLive/DeleteVizuLive/deletevizulivecontroller/deletevizulivecontroller";




import { testecontoller } from "./teste/testecontroller/testecontroller";

import { testemidllewares } from "./Testes/testemidleweres";
import {midllewaruser} from "./middlewares/midllewaruser";
import uploadConfig from '../src/config/multer'
import multer from 'multer'
import { darpresentedeleteservice } from "./Presentes/DarPresente/DarPresentDelete/darpresentedeleteservice/darpresentedeleteservice";
import { listseguidorescontroller } from "./User/Seguidores/ListTodosSeguidores/listseguidorescontroller/listseguidorescontroller";
import { updateuserimagecontroller } from "./User/UpdateUserImage/updateuserimagecontroller/updateuserimagecontroller";
import { updateuserdatanivercontroller } from "./User/UpdateUserDataniver/updateuserdatanivercontroller/updateuserdatanivercontroller";
import uploadUploader from '../src/config/multerUpload'
const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));
const uploader = multer(uploadUploader.uploadUploader('./tmp'))

router.post('/CreateUser',upload.single('file'),new createusercontroller().handle)
router.get('/Login', new Authusercontroller().handle)
router.get('/MostrarUser',new mostrarUserController().handle)
router.get('/criarMenssagem', new createMenssagemController().handle)
router.get('/MostrarMenssagem',new mostrarMensagemController().handle )
router.post('/createPresentesController',upload.single('file'),new createPresentesController().handle)
router.get('/MostrarPresentes',new mostrarPresentesController().handle)
router.post('/createlive',new createlivecontroller().handle)
router.get('/setlive',new setlivecontroller().handle)
router.get('/mostrartodos',new mostrartodoscontroller().handle)
router.delete('/deletelive', new deletelivecontroller().handle)
//router.post('/createpagamento', new createpagamentocontroller().handle)
router.post('/createpix',new createpixcontroller().handle)
router.post('/createseguindo',new createseguindocontroller().handle)
router.get('/setseguindo',new setseguindocontroller().handle)
router.delete('/deleteseguidor',new deleteseguindocontroller().handle)
router.put('/updatemoeda',new updatemoedacontroller().handle)
router.get('/MostrarTodosUsers',new mostrarTodosUserController().handle)
router.put('/updaterecebidos',new updaterecebidoscontroller().handle)
router.post('/darpresente',new darpresentecontroller().handle)
router.put('/updatetosave',new updatesavecontroller().handle)
router.put('/convertcon',new convertercontroller().handle)
router.put('/adicionarmoney',new adicionarmoneycontroller().handle)
router.put('/createmoeda',new createmoedacontroller().handle)
router.get('/setDarPresente',new mostrarpresentedarcontroller().handle)
router.delete('/deletedarpresente',new darpresentedeletecontroller().handle)
router.get('/Seguidores',new createseguidorescontroller().handle)
router.get('/verificaseguidor',new setseguidorescontroller().handle )
router.put('/updateuser',upload.single('file'),new updateusercontroller().handle)
router.get('/pesquisarPix',new confirmpixcotroller().handle)
router.put('/sendpix',new pixsendcontroller().handle)
router.post('/configwebhookpix',new configpixwebhookcontroller().handle)
router.delete('/deletepagamentopix',new deletepagamentopixcontroller().handle)
router.put('/updatepagamento',new updatepagamentocontroller().handle)
router.get('/mostrarpagamentopix',new mostrarpagamentopixcontroller().handle)
router.post('/createchavepix',new addchavecontroller().handle)
router.get('/setchave', new listchavecontroller().handle)
router.delete('/deletechave',new Deletechavecontroller().handle)
router.delete('/deletesendpix',new deletesendpixcontroller().handle)
router.post('/createchatlive',new createchatlivecontroller().handle)
router.get('/mostrachatlive',new mostrachatlivecontroller().handle)
router.delete('/deletechatlive',new deletechatlivecontroller().handle)
router.put('/updateVizu',new updatevizulivecontroller().handle)
router.post('/createvizu',new createvizulivecontroller().handle)
router.get('/listvizu',new  listvizulivecontroller().handle)
router.delete('/deletevizu',new deletevizulivecontroller().handle)
router.get('/listSeguidores',new listseguidorescontroller().handle)
router.put('/updateImageUser',upload.single('file'),new updateuserimagecontroller().handle)
router.put('/updatedatanascimento',new updateuserdatanivercontroller().handle)

export{router}