import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Users from "./UserModel.js";
import Items from "./ItemsModel.js";

const {DataTypes} = Sequelize;

const Cart = database.define('cart',{
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

Users.hasMany(Cart);
Cart.belongsTo(Users, {foreignKey: 'userId'});

Items.hasMany(Cart);
Cart.belongsTo(Items, {foreignKey: 'itemId'});

export default Cart;