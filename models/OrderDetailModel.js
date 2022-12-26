import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Orders from "./OrderModel.js";
import Items from "./ItemsModel.js";

const {DataTypes} = Sequelize;

const OrderDetail = database.define('orderdetail',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    orderId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    itemId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    qty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Orders.hasMany(OrderDetail);
OrderDetail.belongsTo(Orders, {foreignKey: 'orderId'});

Items.hasMany(OrderDetail);
OrderDetail.belongsTo(Items, {foreignKey: 'itemId'});

export default OrderDetail;