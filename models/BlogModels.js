import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Category from "./CategoryModel.js";

const {DataTypes} = Sequelize;

const Blogs = database.define('blog',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
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
    BlogTitle:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    BlogContent:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    BlogImage:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    BlogStatus:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Category.hasOne(Blogs);
Blogs.belongsTo(Category, {foreignKey: 'categoryId'});

export default Blogs;