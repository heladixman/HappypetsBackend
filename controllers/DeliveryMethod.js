import DeliveryMethod from "../models/DeliveryMethodModel.js";

export const getDeliveryMethod = async(req, res) =>{
    try {
        const response = await DeliveryMethod.findAll({
            attributes:[['id','deliveryId'],['deliveryName','deliveryName'],['deliveryParent','deliveryParent'],['deliveryStatus','deliveryStatus']]
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Bad_Request"
                }]
            })
        } else {
            return res.status(200).json({
                code: "200",
                status: "OK",
                data: response
            });
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

export const getDeliveryMethodById = async(req, res) =>{
    try {
        const response = await DeliveryMethod.findOne({
            attributes:[['id','deliveryId'],['deliveryName','deliveryName'],['deliveryParent','deliveryParent'],['deliveryStatus','deliveryStatus']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(404).json({
                code: "404",
                status: "Not_Found",
                errors: [{
                    msg: "Tidak dapat menemukan metode pengiriman yang dimaksud"
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

export const createDeliveryMethod = async(req, res) =>{
    const {deliveryName, deliveryParent, deliveryStatus} = req.body
    const deliveryExist = await DeliveryMethod.findOne({where: {deliveryName : req.body.deliveryName}})

    if (deliveryExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Metode Pengiriman sudah pernah dibuat, silahkan buat metode pengiriman baru"
            }]
        })
    }

    try{
        await DeliveryMethod.create({
            deliveryName: deliveryName,
            deliveryParent: deliveryParent,
            deliveryStatus: deliveryStatus
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Metode Pengiriman berhasil ditambahkan"
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

export const updateDeliveryMethod = async(req, res) =>{
    const {deliveryName, deliveryParent, deliveryStatus} = req.body
    const deliveryCheck = await DeliveryMethod.findOne({where: {id: req.params.id}})

    if (!deliveryCheck){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan metode pengiriman yang dimaksud"
            }]
        })
    }

    try {
        await DeliveryMethod.update({
            deliveryName: deliveryName,
            deliveryParent: deliveryParent,
            deliveryStatus: deliveryStatus
        },{
            where: {
                id: deliveryCheck.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Metode Pengiriman berhasil diperbarui"
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

export const deleteDeliveryMethod = async(req, res) =>{
    const deliveryCheck = await DeliveryMethod.findOne({where: {id: req.params.id}})

    if (!deliveryCheck){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan Metode Pengiriman yang ingin dihapus"
            }]
        })
    }

    try{
        await DeliveryMethod.destroy({
            where:{
                id: deliveryCheck.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Metode Pengiriman berhasil dihapus"
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