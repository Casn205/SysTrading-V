import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Usuario= db.define('usuario',{
    Nombre:{type: DataTypes.STRING},
    Apellido:{type: DataTypes.STRING},
    Cedula:{type: DataTypes.STRING},
    Correo:{type: DataTypes.STRING},
    FechaNac:{type: DataTypes.DATE},
    Contraseña:{type: DataTypes.STRING}
})

export default Usuario