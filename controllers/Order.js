import Orders from "../models/OrderModel.js";

export const getOrders = async (req, res) =>{
    try {
        const response = await Orders.findAll({
            attributes:[['id','orderId'],['uuid','uuid'],['userId','userId'],['paymentId','paymentId'],['deliveryId','deliveryId'],['paymentCode','paymentCode'],['deliveryCode','deliveryCode'],['invoice','invoice'],['orderTotal','orderTotal'],['orderStatus','orderStatus']]
        });
        if (!response){
            return res.status(404).json({
                code: "404",
                status: "Not_Found",
                errors: [{
                    msg: "Order tidak ditemukan"
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

export const getOrderById = async(req, res) =>{
    try {
        const response = await Orders.findOne({
            attributes:[['id','orderId'],['uuid','uuid'],['userId','userId'],['paymentId','paymentId'],['deliveryId','deliveryId'],['paymentCode','paymentCode'],['deliveryCode','deliveryCode'],['invoice','invoice'],['orderTotal','orderTotal'],['orderStatus','orderStatus']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan order yang dimaksud"
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

export const createOrder = async(req, res) =>{
    const {userId, paymentId, deliveryId, paymentCode, deliveryCode, invoice, orderTotal, orderStatus} = req.body

    try{
        await Orders.create({
            userId: userId,
            paymentId: paymentId,
            deliveryId: deliveryId,
            paymentCode: paymentCode,
            deliveryCode: deliveryCode,
            invoice: invoice,
            orderTotal :orderTotal,
            orderStatus: orderStatus
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Order berhasil ditambahkan"
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

export const updateOrder = async(req, res) =>{
    const {userId, paymentId, deliveryId, paymentCode, deliveryCode, invoice, orderTotal, orderStatus} = req.body
    const orderCheck = await Orders.findOne({where: {id: req.params.id}})

    if (!orderCheck){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan order yang dimaksud"
            }]
        })
    }

    try {
        await Orders.update({
            userId: userId,
            paymentId: paymentId,
            deliveryId: deliveryId,
            paymentCode: paymentCode,
            deliveryCode: deliveryCode,
            invoice: invoice,
            orderTotal :orderTotal,
            orderStatus: orderStatus
        },{
            where: {
                id: orderCheck.id
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

export const deleteOrder = async(req, res) =>{
}