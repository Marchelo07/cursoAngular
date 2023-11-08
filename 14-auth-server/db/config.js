

const mongoose = require('mongoose');

const dbConection = async() =>{

    try{

        await mongoose.connect(process.env.BD_CNN , {        
        });

        console.log('bdd online')

    }catch(error){  
        console.log(error);
        throw new Error('Error a la hora de inicializar conexion con bdd');
    }

}

module.exports = {
    dbConection
}