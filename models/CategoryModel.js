import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const {DataTypes} = Sequelize;

const Category = database.define('category',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    categoryName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Category.hasOne(Category);
Category.belongsTo(Category);

export default Category;