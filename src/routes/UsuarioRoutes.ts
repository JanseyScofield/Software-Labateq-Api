import {cadastrarUsuario} from 'controllers/UsuarioController';
import express from 'express';

const router = express.Router();

router.post('/cadastrar', cadastrarUsuario);

export default router;