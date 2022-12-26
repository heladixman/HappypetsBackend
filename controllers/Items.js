import Attribut from "../models/AttributModel.js";
import Category from "../models/CategoryModel.js";
import Items from "../models/ItemsModel.js";
import Stores from "../models/StoreModel.js";

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