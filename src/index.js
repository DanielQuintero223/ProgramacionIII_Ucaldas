const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRoute = require('../routes/user')
const productRoute = require('../routes/product')

//constantes de config
const mongoose = require('mongoose')
require('dotenv').config()


//prueba de conexion
app.listen(port, ()=> console.log('listening por el puerto', port))
//localhost:3000
app.get('/', (req,res)=>res.send('Bienvenido al index del proyecto'))

//metodo de conexion 
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>console.log('conectados con mongodb atlas'))
.catch((error)=>console.log(error))

//middleware
app.use(express.json())

//localhost:3000/api/user
app.use('/api', userRoute)

//localhost:3000/api/product
app.use('/api', productRoute)