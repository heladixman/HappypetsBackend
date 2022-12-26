import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Items from "./ItemsModel.js";

const {DataTypes} = Sequelize;

const Attribut = database.define('attribut',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
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
    itemAge:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 200]
        }
    },
    itemSpesies:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    itemColor:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:1,
        validate:{
            notEmpty: true
        }
    },
    itemSex:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Items.hasOne(Attribut);
Attribut.belongsTo(Items, {foreignKey: 'itemId'});

export default Attribut;