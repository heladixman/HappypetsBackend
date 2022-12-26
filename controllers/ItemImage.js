import Image from "../models/ItemImageModel.js";

export const getImage = async(req, res) =>{
    try {
        const response = await Image.findAll({
            attributes:[['id','imageId'],['itemId','itemId'],['path','path']]
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

export const getImageById = async(req, res) =>{
    try {
        const response = await Image.findOne({
            attributes:[['id','imageId'],['itemId','itemId'],['path','path']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan Image yang dimaksud"
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

export const createImage = async(req, res) =>{
    const {itemId, path} = req.body

    try{
        await Image.create({
            itemId: itemId,
            path: path,
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Image berhasil ditambahkan"
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

export const updateImage = async(req, res) =>{
    const {itemId, path} = req.body
    const image = await Image.findOne({where: {id: req.params.id}})

    if (!image){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan artikel yang dimaksud"
            }]
        })
    }

    try {
        await Image.update({
            itemId: itemId,
            path: path,
        },{
            where: {
                id: image.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Image berhasil diperbarui"
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

export const deleteImage = async(req, res) =>{
    const image = await Image.findOne({where: {id: req.params.id}})

    if (!image){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan image yang ingin dihapus"
            }]
        })
    }

    try{
        await Image.destroy({
            where:{
                id: image.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Image berhasil dihapus"
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