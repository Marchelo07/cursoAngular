const { response } = require("express");
const { validationResult } = require("express-validator");

/* Un moddleware es una funcion pero con un parametro adicional
request (lo que recibe) resp (response que vamos a devolver al usuario), 
next (para que continue con la ejecucion)*/
const validarCampos = (req, resp = response, next) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return resp.status(400).json({
            ok:false,
            errors: errors.mapped()
        });
    }
    next();
} 

module.exports = {
    validarCampos
}