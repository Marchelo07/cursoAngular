const { response, json } = require("express")
const jwt = require('jsonwebtoken');

const validarJWT = ( req, resp = response, next) => {

    const token = req.header('x-token');
    console.log(token)

    if(!token){
        return resp.status(401).json({
            ok: false,
            msg: 'error en el token'
        });
    }

    try{
        //validamos el token que recibe el endpoint con la clave
        const { uid, name} = jwt.verify( token, process.env.SECRET_JWT_KEY);
        req.uid = uid;
        req.name = name
        console.log(uid, name)

    }catch(error){
        console.log(error)
        return resp.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })
    }
    //todo ok;
    next();
    
}


module.exports = {
    validarJWT
}