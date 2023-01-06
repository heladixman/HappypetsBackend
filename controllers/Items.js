import Sequelize, { where } from 'sequelize'
import Attribut from "../models/AttributModel.js";
import Category from "../models/CategoryModel.js";
import Items from "../models/ItemsModel.js";
import Orders from "../models/OrderModel.js";
import PaymentMethod from "../models/PaymentMethodModel.js";
import Stores from "../models/StoreModel.js";
import Users from "../models/UserModel.js";

export const getItems = async (req, res) =>{
    try {
        const response = await Items.findAll({
            attributes:[['uuid','productUrl'],['itemName','itemName'],['itemDescription','itemDescription'],['itemStock','itemStock'],['itemPrice','itemPrice'],['itemType','itemType'],['itemStatus','itemStatus']],
            include: [
            {
                model: Stores,
                attributes: [['uuid', 'storeUrl'], ['storeName', 'storeName'], ['storeLevel', 'storeLevel']]
            },
            {
                model: Category,
                attributes: [['uuid', 'categoryUrl'], ['categoryName','Category']]
            }
        ]
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        } else {
            return res.status(200).json([{
                code: "200",
                status: "OK",
                data: response
            }]);
        }
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const getItemsTypePets = async (req, res) =>{
    try {
        const response = await Items.findAll({
            attributes:[['uuid','productUrl'],['itemName','itemName'],['itemDescription','itemDescription'],['itemStock','itemStock'],['itemPrice','itemPrice'],['itemType','itemType'],['itemStatus','itemStatus']],
            include: [
            {
                model: Stores,
                attributes: [['uuid', 'storeUrl'], ['storeName', 'storeName'], ['storeLevel', 'storeLevel']]
            },
            {
                model: Category,
                attributes: [['uuid', 'categoryUrl'], ['categoryName','Category']]
            }
        ],
        where: {
            itemType: 'pets'
        }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        } else {
            return res.status(200).json([{
                code: "200",
                status: "OK",
                data: response
            }]);
        }
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const getItemsTypeProduct = async (req, res) =>{
    try {
        const response = await Items.findAll({
            attributes:[['uuid','productUrl'],['itemName','itemName'],['itemDescription','itemDescription'],['itemStock','itemStock'],['itemPrice','itemPrice'],['itemType','itemType'],['itemStatus','itemStatus']],
            include: [
            {
                model: Stores,
                attributes: [['uuid', 'storeUrl'], ['storeName', 'storeName'], ['storeLevel', 'storeLevel']]
            },
            {
                model: Category,
                attributes: [['uuid', 'categoryUrl'], ['categoryName','Category']]
            }
        ],
        where: {
            itemType: 'product'
        }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        } else {
            return res.status(200).json([{
                code: "200",
                status: "OK",
                data: response
            }]);
        }
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const countItemsTypePets = async (req, res) =>{
    try {
        const response = await Items.count({
            where: {
                itemType: 'pets'
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        } else {
            return res.status(200).json([{
                code: "200",
                status: "OK",
                data: response
            }]);
        }
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const dashboardAdminData = async (req, res) =>{
    try {
        const response = await Items.count({
            where: {
                itemType: 'pets'
            }
        })
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        }
        const response2 = await Items.count({
            where: {
                itemType: 'product'
            }
        })
        if (!response2){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        }
        const response3 = await Stores.count({
        })
        if (!response3){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        }
        const response4 = await Users.count({
        })
        if (!response4){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        }
        else {
            return res.status(200).json([{
                code: "200",
                status: "OK",
                data: [
                    {icon: "MdOutlinePets", amount: response, title: 'Total Hewan Peliharaan', iconColor: 'rgb(255, 244, 229)', iconBg: 'rgb(254, 201, 15)'},
                    {icon: "BsBox", amount: response2, title: 'Total Produk', iconColor: 'rgb(0, 194, 146)', iconBg: 'rgb(235, 250, 242)'},
                    {icon: "BiStore", amount: response3, title: 'Total Toko', iconColor: 'rgb(255, 244, 229)', iconBg: 'rgb(254, 201, 15)'},
                    {icon: "AiOutlineUser", amount: response4, title: 'Total User', iconColor: 'rgb(0, 194, 146)', iconBg: 'rgb(235, 250, 242)'},
                ]
            }]);
        }
        
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const dashboardAdminData2 = async (req, res) =>{
    try {
        const response = await PaymentMethod.findAll({
            attributes: ['paymentName', 'paymentCategory'],
            include: [
                {
                  model: Orders,
                  attributes: [
                    [Sequelize.fn('SUM', Sequelize.col('orderTotal')), 'total']
                  ],
                  required: true,
                  where: {
                    paymentmethodId: Sequelize.col('paymentmethod.id')
                  },
                  group: ['paymentmethodId'],
                }
              ],
            group: ['paymentmethod.id']
        })
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak ada record metode pembayaran"
                }]
            })
        }
        else {
            return res.status(200).json([{
                code: "200",
                status: "OK",
                data: response
            }]);
        }
        
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const getItemById = async(req, res) =>{
    try {
        const response = await Items.findOne({
            attributes:[['id','productId'],['categoryId','categoryId'],['itemName','itemName'],['itemDescription','itemDescription'],['itemStock','itemStock'],['itemPrice','itemPrice'],['itemType','itemType'],['itemStatus','itemStatus']],
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Stores,
                    attributes: [['uuid', 'storeUrl'], ['storeName', 'storeName'], ['storeLevel', 'storeLevel']]
                },
                {
                    model: Category,
                    attributes: [['uuid', 'categoryUrl'], ['categoryName','Category']]
                },
        ]});
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan item yang dimaksud"
                }]
            })
        }
        res.status(200).json({
            code: "200",
            status: "OK",
            data: [response]
        });
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const createItem = async(req, res) =>{
    const {storeId, itemName, itemDescription, itemPrice, itemStock, itemStatus} = req.body
    const productExist = await Items.findOne({where: {name : req.body.productName}})

    if (productExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Item dengan nama yang sama telah ditambahkan, silahkan buat Item dengan nama berbeda"
            }]
        })
    }

    try{
        await Items.create({
            storeId: storeId,
            itemName: itemName,
            itemDescription: itemDescription,
            itemPrice: itemPrice,
            itemStock: itemStock,
            itemStatus: itemStatus
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Item berhasil ditambahkan"
            }]
        })
    } catch (error) {
        res.status(500).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const updateItem = async(req, res) =>{
    const {storeId, itemName, itemDescription, itemPrice, itemStock, itemStatus} = req.body
    const itemCheck = await Items.findOne({where: {id: req.params.id}})

    if (!itemCheck){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan item yang dimaksud"
            }]
        })
    }

    try {
        await Items.update({
            storeId: storeId,
            itemName: itemName,
            itemDescription: itemDescription,
            itemPrice: itemPrice,
            itemStock: itemStock,
            itemStatus: itemStatus
        },{
            where: {
                id: itemCheck.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Item berhasil diperbarui"
            }]
        })
    }
    catch (error){
        return res.status(400).json({
            code: "500",
            status: "Internal_Server_Error",
            errors: error.message
        })
    }
}

export const deleteItem = async(req, res) =>{
    const itemCheck = await Items.findOne({where: {id: req.params.id}})

    if (!itemCheck){
        return res.status(404).json({
            code: "404",
            status: "Not_Found",
            errors: [{
                msg: "Tidak dapat menemukan item yang ingin dihapus"
            }]
        })
    }

    try{
        await Items.destroy({
            where:{
                id: itemCheck.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Item berhasil dihapus"
            }]
        })

    }
    catch (error){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: error.message
        })
    }
}