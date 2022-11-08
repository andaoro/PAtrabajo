import { Sequelize } from "sequelize";

const dataBase = new Sequelize('guacamoly_db','root','',{
    host: 'localhost',
    port: '3306',
    dialect: 'mariadb',
    define:{
        timestamps:true
    }
})

export{
    dataBase
}