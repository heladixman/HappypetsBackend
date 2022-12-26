import Cart from "../models/CartModel.js";

export const getUserCart = async(req, res) =>{
    try {
        const response = await Cart.findAll({
            attributes:[['id','cartId'],['userId','userId'],['itemId','itemId'],['qty','quantity']]
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

export const getUserCartById = async(req, res) =>{
    try {
        const response = await Cart.findOne({
            attributes:[['id','cartId'],['userId','userId'],['itemId','itemId'],['qty','quantity']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan produk dalam keranjang"
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

export const createUserCart = async(req, res) =>{
    const {userId, productId, qty} = req.body
    const productCartExist = await Cart.findOne({where: {productId : req.body.productId}})

    if (productCartExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Produk dengan nama yang sama telah ditambahkan, silahkan buat product dengan nama berbeda"
            }]
        })
    }

    try{
        await Cart.create({
            userId: userId,
            productId: productId,
            qty: qty
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Produk berhasil ditambahkan ke keranjang"
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

export const updateUserCart = async(req, res) =>{
    const {qty} = req.body
    const userCartCheck = await Cart.findOne({where: {id: req.params.id}})
    if (!userCartCheck){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan item keranjang yang dimaksud"
            }]
        })
    }

    try {
        await Category.update({
            qty: qty
        },{
            where: {
                id: userCartCheck.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "kuantitas berhasil diperbarui"
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

export const deleteUserCart = async(req, res) =>{
    const userCartCheck = await Cart.findOne({where: {id: req.params.id}})

    if (!userCartCheck){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan Item Cart yang ingin dihapus"
            }]
        })
    }

    try{
        await Cart.destroy({
            where:{
                id: userCartCheck.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Item Cart berhasil dihapus"
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