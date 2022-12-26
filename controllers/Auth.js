import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) =>{
    const user = await Users.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({
        code: "404",
        status: "Not_Found",
        errors: [{
            msg: "User tidak ditemukan"
        }]
        
    });

    const match = await argon2.verify(user.password, req.body.password);

    if(!match) return res.status(400).json({
        code: "400",
        status: "Bad_Request",
        errors: [{
            msg: "Akun atau Password anda salah, silahkan coba lagi"
        }]
    });

    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const name = user.Uname;
    const email = user.email;
    const role = user.Urole;
    res.status(200).json({uuid, name, email, role});
}

export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({
            code: "401",
            status: "Unauthorized",
            errors: [{
                msg: "Mohon login ke akun Anda!"
            }]
        });
    }
    const user = await Users.findOne({
        attributes:['uuid','name','email','role'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({
        code: "404",
        status: "Not_Found",
        errors: [{
            msg: "User tidak ditemukan"
        }]
    });
    res.status(200).json(user);
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({
            code: "400",
            status: "Not_Found",
            errors: [{
                msg: "Tidak dapat logout"
            }]
        });
        res.status(200).json({
            code: "200",
            status: "OK",
            errors: [{
                msg: "Anda telah logout"
            }]
        });
    });
}