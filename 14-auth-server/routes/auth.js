    const { Router } = require('express');
const { crearUsuario, loginUser, validarUsuario } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Crear usuario
router.post('/new', [
    check('name', 'El nombre no puede ser vacio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min:6}),
    validarCampos //middleware personalizado, para hacer las validaciones antes de que ingrese al controlador
    //eso evita estar creando las validaciones en todos los controladores
],crearUsuario);

//Login de usuario
/* El endpoint se puede configurar 3 cosas ( path, midleware, controlador,
    se puede configurar varios midleware antes de que se ejecute el controlador, como por ejemplo
    para hacer validaciones, se puede enviar un array o solo un midleware*/
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min:6}),
    validarCampos
] ,loginUser);

//Validar y revalidar token
router.get('/renew', validarJWT, validarUsuario);


//exportamos la clase para poder utilizarla
module.exports = router;