import { Request, Response, NextFunction } from 'express';

function checarUsuarioCadastrarUsuario(req : Request, res : Response, next : NextFunction) : any{
    if(req.params.usuarioID !== "3"){
        return res.status(400).send({"mensagem" : "Apenas o chefe pode cadastar um novo usuário."});
    }
    return next();
}

export {checarUsuarioCadastrarUsuario};