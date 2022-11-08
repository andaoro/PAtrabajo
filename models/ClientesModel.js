import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";


const Clientes = dataBase.define('clientes',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull:false
    },
    documento:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull:false
    }
})


export {Clientes}

//nombre, apellido, documento, correo,
//dirección y teléfono de contacto