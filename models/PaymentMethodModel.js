import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const {DataTypes} = Sequelize

const PaymentMethod = database.define('paymentmethod',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    paymentName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentCategory:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentDesc:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    paymentStatus:{
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

export default PaymentMethod;