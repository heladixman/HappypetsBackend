import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Attribut from "./AttributModel.js";
import Category from "./CategoryModel.js";
import Stores from "./StoreModel.js";

const {DataTypes} = Sequelize;

const Items = database.define('item',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    storeId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    itemName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 200]
        }
    },
    itemDescription:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    itemStock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:1,
        validate:{
            notEmpty: true
        }
    },
    itemPrice:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    itemType:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'product',
        validate:{
            notEmpty: true
        }
    },
    itemStatus:{
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

Stores.hasMany(Items);
Items.belongsTo(Stores, {foreignKey: 'storeId'});

Category.hasOne(Items);
Items.belongsTo(Category, {foreignKey: 'categoryId'});

export default Items;