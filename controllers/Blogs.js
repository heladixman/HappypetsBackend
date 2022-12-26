import Blogs from "../models/BlogModels.js";

export const getBlogs = async(req, res) =>{
    try {
        const response = await Blogs.findAll({
            attributes:[['id','blogId'],['categoryId','categoryBlog'],['BlogTitle','BlogTitle'],['BlogImage','BlogImage'],['BlogContent','BlogContent']]
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

export const getBlogsById = async(req, res) =>{
    try {
        const response = await Blogs.findOne({
            attributes:[['id','blogId'],['categoryId','categoryBlog'],['BlogTitle','BlogTitle'],['BlogImage','BlogImage'],['BlogContent','BlogContent']],
            where: {
                id: req.params.id
            }
        });
        if (!response){
            return res.status(400).json({
                code: "400",
                status: "Bad_Request",
                errors: [{
                    msg: "Tidak dapat menemukan artikel yang dimaksud"
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

export const createBlogs = async(req, res) =>{
    const {categoryId, blogTitle, blogContent, blogImage, blogStatus} = req.body
    const blogExist = await Blogs.findOne({where: {blogTitle : req.body.blogTitle}})

    if (blogExist) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Artikel sudah pernah dibuat, silahkan buat artikel dengan judul berbeda"
            }]
        })
    }

    try{
        await Blogs.create({
            categoryId: categoryId,
            BlogTitle: blogTitle,
            BlogContent: blogContent,
            BlogImage: blogImage,
            BlogStatus: blogStatus
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Artikel berhasil ditambahkan"
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

export const updateBlogs = async(req, res) =>{
    const {categoryId, blogTitle, blogContent, blogImage, blogStatus} = req.body
    const blog = await Blogs.findOne({where: {id: req.params.id}})
    if (!blog){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan artikel yang dimaksud"
            }]
        })
    }

    try {
        await Blogs.update({
            categoryId: categoryId,
            BlogTitle: blogTitle,
            BlogContent: blogContent,
            BlogImage: blogImage,
            BlogStatus: blogStatus
        },{
            where: {
                id: blog.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg : "Artikel berhasil diperbarui"
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

export const deleteBlogs = async(req, res) =>{
    const blog = await Blogs.findOne({where: {id: req.params.id}})

    if (!blog){
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Tidak dapat menemukan artikel yang ingin dihapus"
            }]
        })
    }

    try{
        await Blogs.destroy({
            where:{
                id: blog.id
            }
        })
        return res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Artikel berhasil dihapus"
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