import { database } from "database/database";
import { Usuario } from "models/UsuarioModel";
const bcrypt = require('bcrypt');

async function create(novoUsuario : any) : Promise<any>{
    const senha : string = "usuariolabateq" + Math.random() * 11;
    const senhaEncriptografada : string = await bcrypt.hash(senha, 10);
    novoUsuario.Senha =  senhaEncriptografada;
    try{
        await database.sync();
        await Usuario.create(novoUsuario);
        return {usuarioCadastrado : novoUsuario, senhaTemporaria : senha};
    }
    catch(e){
        throw new Error((e as Error).message);
    }
}


export {create};