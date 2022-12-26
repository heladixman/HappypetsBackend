import PaymentMethod from "../models/PaymentMethodModel.js";

export const getPaymentMethod = async(req, res) =>{
    try {
        const response = await PaymentMethod.findAll({
            attributes:[['id','paymentId'],['paymentName','paymentName'],['paymentDesc','paymentDesc'],['paymentStatus','paymentStatus']]
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

export const getPaymentMethodById = async(req, res) =>{
    try {
        const response = await PaymentMethod.findOne({
            attributes:[['id','paymentId'],['paymentName','paymentName'],['paymentDesc','paymentDesc'],['paymentStatus','paymentStatus']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan metode pembayaran yang dimaksud"
                }]
            })
        } else {
           return res.status(200).json({
                code: "200",
                status: "OK",
                data: [response]
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

export const createPaymentMethod = async(req, res) =>{
    const {paymentName, paymentDesc, paymentStatus} = req.body
    const PMExist = await PaymentMethod.findOne({where: {PMname : req.body.paymentMethodName}})

    if (PMExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Metode pembayaran sudah ada sebelumnya, silahkan buat metode pembayaran lainnya"
            }]
        })
    }

    try{
        await PaymentMethod.create({
            paymentName: paymentName,
            paymentDesc: paymentDesc,
            paymentStatus: paymentStatus
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Metode pembayaran berhasil ditambahkan"
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

export const updatePaymentMethod = async(req, res) =>{
    const {paymentName, paymentDesc, paymentStatus} = req.body
    const PMExist = await PaymentMethod.findOne({where: {PMname : req.body.paymentMethodName}})

    if (!PMExist){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan metode pembayaran yang dimaksud"
            }]
        })
    }

    try {
        await PaymentMethod.update({
            paymentName: paymentName,
            paymentDesc: paymentDesc,
            paymentStatus: paymentStatus
        },{
            where: {
                id: PMExist.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Metode Pembayaran berhasil diperbarui"
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

export const deletePaymentMethod = async(req, res) =>{
    const paymentMethod = await PaymentMethod.findOne({where: {id: req.params.id}})

    if (!paymentMethod){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan metode pembayaran yang ingin dihapus"
            }]
        })
    }

    try{
        await PaymentMethod.destroy({
            where:{
                id: paymentMethod.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Metode Pembayaran berhasil dihapus"
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