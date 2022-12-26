import Attribut from "../models/AttributModel.js";

export const getAttribut = async(req, res) =>{
    try {
        const response = await Attribut.findAll({
            attributes:[['id','AttributId'],['itemId','itemId'],['itemAge','Age'],['itemSpesies','Spesies'],['itemColor','Color'],['itemSex','Gender']]
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

export const getAttributById = async(req, res) =>{
    try {
        const response = await Attribut.findOne({
            attributes:[['id','AttributId'],['itemId','itemId'],['itemAge','Age'],['itemSpesies','Spesies'],['itemColor','Color'],['itemSex','Gender']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan Attribut yang dimaksud"
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

export const createAttribut = async(req, res) =>{
    const {id, itemId, itemAge, itemSpesies, itemColor, itemSex} = req.body
    const attributExist = await Attribut.findOne({where: {attributDetail : req.body.attributDetail}})

    if (attributExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Attribut sudah pernah dibuat, pastikan attribut tidak serupa"
            }]
        })
    }

    try{
        await Attribut.create({
            id: id,
            itemId: itemId,
            itemAge: itemAge,
            itemSpesies: itemSpesies,
            itemColor: itemColor,
            itemSex: itemSex
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Attribut berhasil ditambahkan"
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

export const updateAttribut = async(req, res) =>{
    const {id, itemId, itemAge, itemSpesies, itemColor, itemSex} = req.body
    const attribut = await Attribut.findOne({where: {id: req.params.id}})
    if (!attribut){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan attribut yang dimaksud"
            }]
        })
    }

    try {
        await Attribut.update({
            id: id,
            itemId: itemId,
            itemAge: itemAge,
            itemSpesies: itemSpesies,
            itemColor: itemColor,
            itemSex: itemSex
        },{
            where: {
                id: attribut.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Attribut berhasil diperbarui"
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

export const deleteAttribut = async(req, res) =>{
    const address = await Attribut.findOne({where: {id: req.params.id}})

    if (!address){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan attribut yang ingin dihapus"
            }]
        })
    }

    try{
        await Attribut.destroy({
            where:{
                id: address.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Attribut berhasil dihapus"
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