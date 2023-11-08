const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    name:{
        type: String,
        requied: true
    },
    email:{
        type: String,
        requied: true,
        unique: true
    },
    password:{
        type: String,
        requied: true
    },
});


module.exports = model('Usuario', UsuarioSchema)