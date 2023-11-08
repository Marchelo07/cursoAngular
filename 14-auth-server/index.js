/*Scripta para que se ejecute cuando es en desarrollo ocupe el dev y en prod el start
(ARCHIVO package.json)*/
const express = require('express');
const cors = require('cors');
const { dbConection } = require('./db/config');
const path = require('path');

/*Linea para que tome las variables de entorno del archivo especial .env, es necesario bajar el servicio
para que tome los cambios*/
require('dotenv').config();

//Para poder ver las variables de entorno
//console.log(process.env);

//Creamos el servidor/aplicacion express
const app= express();

//Conexion a la base de datos
dbConection();

//Configuracion de directorio publico, cuando alguien ingresa con la url por el navegador
app.use(express.static('public'));

//iniciamos el servidor, seteando el puerto que deseamos, con fines educativos quemamos el puerto
app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});


//CORS, para permitir que otros dominio conocidos pedan hacer peticiones al backEnd
app.use(cors())

//Lectura para obtener la informacion del body de los endpoints
app.use(express.json());

//Importamos las rutas
//Ponemos la url que debe estar antes de los end points
app.use('/api/auth', require('./routes/auth'))

/*Para menejar el resto de rutas*/
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});