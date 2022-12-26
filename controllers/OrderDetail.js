import OrderDetail from "../models/OrderDetailModel.js";

export const getOrderDetail = async (req, res) =>{
    try {
        const response = await OrderDetail.findAll({
            attributes:[['id','orderDetailId'],['orderId','orderId'],['itemId','itemId'],['qty','qty']]
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "order detail tidak ditemukan"
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

export const getOrderDetailById = async(req, res) =>{
    try {
        const response = await OrderDetail.findOne({
            attributes:[['id','orderDetailId'],['orderId','orderId'],['itemId','itemId'],['qty','qty']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "order detail tidak ditemukan"
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

export const createOrderDetail = async(req, res) =>{
    const {orderId, itemId, qty} = req.body

    try{
        await OrderDetail.create({
            orderId: orderId,
            itemId: itemId,
            qty: qty
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Order Detail berhasil ditambahkan"
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

export const updateOrderDetail = async(req, res) =>{
}

export const deleteOrderDetail = async(req, res) =>{
}