import {cadastrarUsuario} from 'controllers/UsuarioController';
import express from 'express';
import {checarUsuarioCadastrarUsuario} from  'middlewares/Middlewares';

const router = express.Router();

router.post('/cadastrar/:usuarioID', checarUsuarioCadastrarUsuario, cadastrarUsuario);

export default router;