import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Stores = database.define('store',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    storeName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    storeProfile:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "images/cache/profile/defaultprofile.jpg",
        validate:{
            notEmpty: true
        }
    },
    storeLevel:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate:{
            notEmpty: true
        }
    },
    storeStatus:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:1,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Users.hasOne(Stores);
Stores.belongsTo(Users, {foreignKey: 'userId'});

export default Stores;