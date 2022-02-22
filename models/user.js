const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    addres: {

        city: {
            type:String,
            required:true
        },
        zipCode: {
            type:String,
            required:true
        },
        lat: {
            type:Number,
            required:true
        },
        length: {
            type:Number,
            required:true
        }
    },
    account_bank: {
        type: String,
        required:true
    }
})


module.exports = mongoose.model("user_document", userSchema)