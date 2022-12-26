import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const {DataTypes} = Sequelize

const Users = database.define('user',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    Ufname:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    Uname:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    Uphone:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    UStatus:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        validate:{
            notEmpty: true
        }
    },
    isVerif:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        validate:{
            notEmpty: true
        }
    },
    Urole:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

export default Users;