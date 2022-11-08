import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";


const Productos = dataBase.define('productos',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    referencia:{
        type: DataTypes.STRING,
        allowNull:false
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull:false
    }
})


export {Productos}

/* nombre, el precio, la
referencia, la cantidad y una breve descripción de este
producto */