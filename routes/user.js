const express = require('express')
const userSchema = require('../models/user')
const router = express.Router()

//agregar un nuevo usuario
router.post('/user', (req, res) => {
    const user = userSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//listar los usuarios
router.get('/user', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//consultar 
router.get('/user/id', (req, res) => {
    const { id } = req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//eliminar
router.delete('/user/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//actualizar

router.put('/user/:id', (req, res) => {
    const { id } = req.params
    const { name, lastname, addres, account_bank } = req.body
    userSchema
        .updateOne({ _id: id }, { $set: { name, lastname, addres, account_bank } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router
