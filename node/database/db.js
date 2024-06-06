import { Sequelize } from "sequelize";

const db = new Sequelize('systrading','root','Admin',{
    host:'localhost',
    dialect:'mysql'
})

export default db