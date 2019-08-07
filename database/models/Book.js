const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  Book = new Schema({
    title : {type: String, required: true},
    author : {type: String, required: true},
    edition : {type: Number, required: true},
    price : {type: Number, required: true},
    quantity: {type: Number, required: true}
})

module.exports = mongoose.model('books', Book)