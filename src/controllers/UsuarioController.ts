import {create} from 'services/UsuarioServices';
import {Request,Response} from 'express';

function cadastrarUsuario(req : Request, res : Response){
    create(req.body).then((novoUsuario : any) =>{
        return res.status(201).send({usuarioCadastrado : novoUsuario});
    }).catch((e : Error) => {
        res.status(400).send({mensagem : "Erro ao cadastrar um novo usuário: "  + e.message});
    });
}

export {cadastrarUsuario};