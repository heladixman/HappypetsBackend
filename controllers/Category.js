import Category from "../models/CategoryModel.js";

export const getCategory = async(req, res) =>{
    try {
        const response = await Category.findAll({
            attributes:[['id','categoryId'],['categoryName','categoryName'],['categoryParent','Parent']]
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

export const getCategoryById = async(req, res) =>{
    try {
        const response = await Category.findOne({
            attributes:[['id','categoryId'],['categoryName','categoryName'],['categoryParent','Parent']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan kategori yang dimaksud"
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

export const createCategory = async(req, res) =>{
    const {categoryName, categoryParent} = req.body
    const categoryExist = await Category.findOne({where: {categoryName : req.body.categoryName, categoryParent: req.body.categoryParent}})

    if (categoryExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Kategori sudah pernah dibuat, silahkan buat kategori dengan nama berbeda"
            }]
        })
    }

    try{
        await Category.create({
            categoryName: categoryName,
            categoryParent: categoryParent
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Kategory berhasil ditambahkan"
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

export const updateCategory = async(req, res) =>{
    const {categoryName, categoryParent} = req.body
    const category = await Category.findOne({where: {id: req.params.id}})
    if (!category){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan kategori yang dimaksud"
            }]
        })
    }

    try {
        await Category.update({
            categoryName: categoryName,
            categoryParent: categoryParent
        },{
            where: {
                id: category.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Kategori berhasil diperbarui"
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

export const deleteCategory = async(req, res) =>{
    const category = await Category.findOne({where: {id: req.params.id}})

    if (!category){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: "Tidak dapat menemukan kategori yang ingin dihapus"
        })
    }

    try{
        await Category.destroy({
            where:{
                id: category.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Kategori berhasil dihapus"
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