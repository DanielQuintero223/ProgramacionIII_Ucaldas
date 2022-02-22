const express = require('express')
const userSchema = require('../models/product')
const router = express.Router()

//agregar un nuevo usuario
router.post('/product', (req, res) => {
    const product = userSchema(req.body)
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//listar productos 

router.get('/product', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//consultar
router.get('/product/id', (req, res) => {
    const { id } = req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//actualizar

router.put('/product/:id', (req, res) => {
    const { id } = req.params
    const { product, img, price, cant, state } = req.body
    userSchema
        .updateOne({ _id: id }, { $set: { product, img, price, cant, state } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//eliminar

router.delete('/product/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router