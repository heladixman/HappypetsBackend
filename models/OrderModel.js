import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Users from "./UserModel.js";
import PaymentMethod from "./PaymentMethodModel.js";
import DeliveryMethod from "./DeliveryMethodModel.js";

const {DataTypes} = Sequelize;

const Orders = database.define('order',{
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
    paymentmethodId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    deliverymethodId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    paymentCode:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    deliveryCode:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    invoice:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    orderTotal:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    orderStatus:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending_payment',
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Users.hasMany(Orders);
Orders.belongsTo(Users, {foreignKey: 'userId'});

PaymentMethod.hasMany(Orders);
Orders.belongsTo(PaymentMethod, {foreignKey: 'paymentmethodId'});

DeliveryMethod.hasMany(Orders);
Orders.belongsTo(DeliveryMethod, {foreignKey: 'deliverymethodId'});

export default Orders;