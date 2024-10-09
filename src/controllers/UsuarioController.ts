import {create} from 'services/UsuarioServices';
import {Request,Response} from 'express';

function cadastrarUsuario(req : Request, res : Response){
    create(req.body).then((dados : any) =>{
        return res.status(201).send({usuarioCadastrado : dados.usuarioCadastrado, senhaTemporaria : dados.senhaTemporaria});
    }).catch((e : Error) => {
        return res.status(400).send({mensagem : "Erro ao cadastrar um novo usuário: "  + e.message});
    });
}

export {cadastrarUsuario};