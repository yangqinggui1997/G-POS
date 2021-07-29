const mongoose  = require('mongoose')

const productSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    name: {
        type: String,
        default: '',
        required: true
    },
    price: {
        type: Number,
        default: 0.000,
        required: true
    }
})

mongoose.model('Product', productSchema)