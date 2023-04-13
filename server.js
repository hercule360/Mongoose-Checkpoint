// require express

const express = require ('express')

//create instance 

const app = express()

// middelware body parser 

app.use(express.json())

// require dotenv

require('dotenv').config()

//connection to DB

const connect = require ('./config/connectDB')
connect() 


// create PORT

const PORT = process.env.PORT 

//listen to the port 


 app.listen(PORT,(err) => {
 err? console.log(err)
  :  console.log(`server is running on port ${PORT}`)

 })
 //require routes

 app.use('/api/contact', require ('./routes/contactRoutes'))

 // export router 
 
 module.exports = router 