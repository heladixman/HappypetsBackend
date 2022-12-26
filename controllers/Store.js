import Stores from "../models/StoreModel.js";
import Users from "../models/UserModel.js";

export const getStores = async(req, res) =>{
    try {
        const response = await Stores.findAll({
            attributes:[['id','storeId'],['userId','userId'],['storeName','storeName'],['storeProfile','storeProfile'],['storeLevel','storeLevel'],['storeStatus','storeStatus']],
            include:[{
                model: Users
            }]
        });
        res.status(200).json({
            code: "200",
            status: "OK",
            data: response
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

export const getStoreById = async(req, res) =>{
    try {
        const response = await Stores.findOne({
            attributes:[['id','storeId'],['userId','userId'],['storeName','storeName'],['storeProfile','storeProfile'],['storeLevel','storeLevel'],['storeStatus','storeStatus']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan toko yang dicari"
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

export const createStore = async(req, res) =>{
    const {userId, storeName, storeProfile, storeLevel, storeStatus} = req.body
    const storeExist = await Stores.findOne({
        where: {storeName : req.body.storeName},
        include: {
            model: Users
        }
    })

    if (storeExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Toko sudah pernah dibuat, silahkan gunakan nama toko berbeda"
            }]
        })
    }

    try{
        await Stores.create({
            userId: userId,
            storeName: storeName,
            storeProfile: storeProfile,
            storeLevel: storeLevel,
            storeStatus: storeStatus
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Toko berhasil ditambahkan"
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

export const updateStore = async(req, res) =>{
    const {userId, storeName, storeProfile, storeLevel, storeStatus} = req.body
    const storeExist = await Stores.findOne({where: {id: req.params.id}})

    if (!storeExist){
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
            userId: userId,
            storeName: storeName,
            storeProfile: storeProfile,
            storeLevel: storeLevel,
            storeStatus: storeStatus
        },{
            where: {
                id: storeExist.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Toko berhasil diperbarui"
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

export const deleteStore = async(req, res) =>{
    const storeCheck = await Stores.findOne({where: {id: req.params.id}})

    if (!storeCheck){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan toko yang ingin dihapus"
            }]
        })
    }

    try{
        await Stores.destroy({
            where:{
                id: storeCheck.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Toko berhasil dihapus"
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