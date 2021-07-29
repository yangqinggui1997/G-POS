const mongoose  = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: true
    }
})

mongoose.model('Category', categorySchema)