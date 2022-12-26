import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Items from "./ItemsModel.js";

const {DataTypes} = Sequelize;

const Image = database.define('image',{
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
    path:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Items.hasMany(Image);
Image.belongsTo(Items, {foreignKey: 'itemId'});

export default Image;