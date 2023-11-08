
//Import response para poder tener la ayuda para el tipado
const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, resp = response)=>{

    try {    
    const { name, email, password } = req.body;

    //Validar si existe el email en la base de datos
    const usuario = await Usuario.findOne({email: email});
    if(usuario){
        return resp.status(400).json({
            ok: false,
            msg: 'El usuario ya existe con ese email'
        });
    }

    //Crear usuario con el modelo
    dbUser = new Usuario(req.body);

    //Hash de la contrasena
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password ,salt);

    //Generar JWT
    const token = await generarJWT(dbUser.id, name);
    console.log(token)

    //Crear usuario en BDD
    await dbUser.save();

    //Generar respuesta exitos
    return resp.status(200).json({
        ok: true,
        uid: dbUser.id,
        msg: 'Usuario creado exitosamente',
        email: dbUser.email,
        token
    });

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,            
            msg: 'Error al crear usuario, contactese con el administrador'
        });        
    }
}

// const loginUser = (req, resp = response)=>{
//     //Validamos si en madleware tiene errores
//     const errors = validationResult(req);
//     console.log(errors)
//     //La validacion de los moddlewares se ejecutan en validar campos antes de ingresar el metodo
//     // if(!errors.isEmpty()){
//     //     return resp.status(400).json({
//     //         ok: false,
//     //         errors: errors.mapped()
//     //     });
//     // }
//     const {  email, password } = req.body;
//     return resp.json({
//         ok: true,
//         msg: 'Login usuario /'
//     });
// }

const loginUser = async(req, resp = response) => {
    try{
        const {  email, password } = req.body;
        const dbUser = await Usuario.findOne({email: email});

        if(!dbUser){
            return resp.status(400).json({
                ok:false,
                msg: 'El correo no existe'
            });
        }
        
        //Confirmar si el pass hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password)
        if(!validPassword){
            return resp.status(400).json({
                ok:false,
                msg: 'El password no es válido'
            });
        }

        //Generar JWT
        const token = await generarJWT(dbUser.id, dbUser.name);

        //Respuesta del servicio
        return resp.json({
            ok:true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token 
        })

    }catch (error){
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'Conectese con el administrador'
        });
    }
}

const validarUsuario = async(req, resp = response)=>{

    const { uid, name } = req;
    const dbUser = await Usuario.findById(uid);
    //Generar nuevo JWT
    const token = await generarJWT(uid, name);

    return resp.json({
        ok: true,
        uid,
        name,
        email: dbUser.email,
        token
    });
}

module.exports = {
    crearUsuario,
    loginUser,
    validarUsuario
}
