const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Category = mongoose.model('Category')

const router = express.Router()

router.use(requireAuth)

router.get('/category', async (req, res) => {
    const categories = await Category.find({userId: req.user._id})
    res.send(categories)
})

router.get('/category', async (req, res) => {
    const category = await Category.find({_id: req._id})
    res.send(category)
})

router.post('/category', async (req, res) => {
    const {name} = req.body

    if(!name)
        return res.status(422).send({error: 'You must provide a name'})
    try
    {
        const track = new Category({name})
        await track.save()
        res.send(track);
    }
    catch(err)
    {
        res.status(442).send({error: err.message})
    }
    
})
module.exports = router