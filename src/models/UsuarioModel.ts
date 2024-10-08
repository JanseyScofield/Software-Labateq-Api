import { INTEGER, Sequelize, STRING } from "sequelize";
import {database} from 'database/database'

const Usuario = database.define('Usuario',{
    ID:{
        type: INTEGER,
        allowNull : false, 
        autoIncrement : true,
        primaryKey : true
    },
    Nome:{
        type: STRING(155),
        allowNull : false       
    },
    CPF :{
        type: STRING(11),
        allowNull : false,
        unique : true,
    },
    Email:{
        type: STRING(155),
        allowNull : false,
        unique : true
    },
    TipoUsuarioID:{
        type: INTEGER,
        allowNull : false
    },
    Senha : {
        type : STRING(10),
        allowNull : false
    }
});

export {Usuario};
