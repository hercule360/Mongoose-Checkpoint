// require Mongoose 
const mongosse = require('mongoose')

// create schema

const Schema = mongoose.Schema

const contactSchema = new Schema ({
    name : {
        type : String,
        required :true
    },
    email :{
        type : String,
        required :true,
        unique : true 
    },
    Phone : Number 

})

//export 

module.exports = Connect = mongoose.model('contact' , contactSchema) 