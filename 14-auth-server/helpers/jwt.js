
const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) =>{

    const payload = {uid, name};

    return new Promise((resolve, reject)=>{
        jwt.sign( payload, process.env.SECRET_JWT_KEY,{
            expiresIn: '24h'
        }, (err, token)=>{
            if(err){
                //Si hubo errores
                console.log(err);
                reject();
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT
}