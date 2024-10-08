import { database } from "database/database";
import { Usuario } from "models/UsuarioModel";
const bcrypt = require('bcrypt');

async function create(novoUsuario : any) : Promise<any>{
    console.log(novoUsuario.Email);
    const senhaEncriptografada : string = await bcrypt.hash(novoUsuario.Senha, 10);
    novoUsuario.Senha =  senhaEncriptografada;
    try{
        await database.sync();
       await Usuario.create(novoUsuario);
        return novoUsuario;
    }
    catch(e){
        throw new Error((e as Error).message);
    }
}

export {create};