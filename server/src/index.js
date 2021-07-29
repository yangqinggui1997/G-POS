require('./models/User')
require('./models/Product')
require('./models/Category')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes =  require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const requireAuth = require('./middlewares/requireAuth')
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(authRoutes)
app.use(categoryRoutes)

const mongoUri = 'mongodb://127.0.0.1:27017/gpos'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
})
app.get('/', requireAuth, (req, res) => {
    res.send(
        {
            email: req.user.email,
            id: req.user._id
        })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})