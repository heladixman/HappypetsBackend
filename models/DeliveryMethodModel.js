import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const {DataTypes} = Sequelize

const DeliveryMethod = database.define('deliverymethod',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    deliveryName:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    deliveryParent:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    deliveryStatus:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:1,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

export default DeliveryMethod;