import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:[['id','id'],['Ufname','userFullName'],['Uname','userName'],['email','userEmail'],['Uphone','userPhone'],['UStatus','userStatus'],['Urole','userRole']]
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

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:[['id','id'],['Ufname','userFullName'],['Uname','userName'],['email','userEmail'],['Uphone','userPhone'],['UStatus','userStatus'],['Urole','userRole']],
            where: {
                id: req.params.id
            }
        });
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

export const createUser = async(req, res) =>{
    const {userEmail, userPhone, password, confPassword, userRole} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);

    const emailExists = await User.findOne({ where: { email: req.body.userEmail } });
    if (emailExists) {
        return res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: "Email telah digunakan"
            }]
        });
    }
    try {
        await User.create({
            email: userEmail,
            Uphone: userPhone,
            password: hashPassword,
            Urole: userRole,
        });
        res.status(201).json({
            code: "201",
            status: "Created",
            data: [{
                msg: "Akun berhasil Didaftarkan"
            }]
        });
    } catch (error) {
        res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const {Uname, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            Uname: Uname,
            email: email,
            password: hashPassword,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Akun berhasil Diperbarui"
            }]
        });
    } catch (error) {
        res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: error.message
            }]
        });
    }
}

export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({
            code: "200",
            status: "OK",
            data: [{
                msg: "Akun berhasil Dihapus"
            }]
        });
    } catch (error) {
        res.status(400).json({
            code: "400",
            status: "Bad_Request",
            errors: [{
                msg: error.message
            }]
        });
    }
}