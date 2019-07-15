// 1. Importaciones / Requerimientos
const mongoose = require('mongoose')

// 2. Schema / Esquema
const burgersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: 1
    },
    price: {
        type: Number
    },
    quantity : {
        type: Number
    },
    total : {
        type: Number
    }
})

// 3. Conversion a Modelo
const Burger = mongoose.model('Burger' , burgersSchema , 'burgers' )



// 4. Exportacion 
module.exports = { Burger };