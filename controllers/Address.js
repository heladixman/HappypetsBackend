import Address from "../models/AddressModel.js";

export const getAddress = async(req, res) =>{
    try {
        const response = await Address.findAll({
            attributes:[['id','AddressId'],['userId','userId'],['province','Province'],['city','City'],['distric','Distric'],['addressDetail','Detail']]
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

export const getAddressById = async(req, res) =>{
    try {
        const response = await Address.findOne({
            attributes:[['id','AddressId'],['userId','userId'],['province','Province'],['city','City'],['distric','Distric'],['addressDetail','Detail']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan Alamat yang dimaksud"
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

export const createAddress = async(req, res) =>{
    const {province, city, distric, addressDetail} = req.body
    const addressExist = await Address.findOne({where: {addressDetail : req.body.addressDetail}})

    if (addressExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Alamat sudah pernah dibuat, pastikan alamat tidak serupa"
            }]
        })
    }

    try{
        await Address.create({
            province: province,
            city: city,
            distric: distric,
            addressDetail: addressDetail
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Alamat berhasil ditambahkan"
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

export const updateAddress = async(req, res) =>{
    const {province, city, distric, addressDetail} = req.body
    const address = await Address.findOne({where: {id: req.params.id}})
    if (!address){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan alamat yang dimaksud"
            }]
        })
    }

    try {
        await Address.update({
            province: province,
            city: city,
            distric: distric,
            addressDetail: addressDetail
        },{
            where: {
                id: address.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Alamat berhasil diperbarui"
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

export const deleteAddress = async(req, res) =>{
    const address = await Address.findOne({where: {id: req.params.id}})

    if (!address){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan alamat yang ingin dihapus"
            }]
        })
    }

    try{
        await Address.destroy({
            where:{
                id: address.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Alamat berhasil dihapus"
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