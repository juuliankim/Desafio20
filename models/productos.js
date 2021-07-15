const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {type: String, require: true, max:100},
    price: {type: Number, require: true, max:100},
    thumbnail: {type: String, require: true, max:100}
})

const Productos = Mongoose.model('productos', schema)

module.exports = Productos