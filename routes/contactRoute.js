// require express 

 const express = require('express')
const { getContactById, getContact, addContact, test, deleteContact, editContact } = require('../controllers/contact')

 // require contact schema

 const Contact = require('../modals/contact')

 // require router from express 

 const router = express.Router()

 // creating routes 

 // test route 
 router.get('/test', test )

 // add contact route 
 router.post('/add_contact', addContact )

 // get all contact route 

 router.get('/all ', getContact)

 // get contact byId 
 router.get ('/get_id/_id',getContactById)

 //delete contact by Id 
 router.delete('/delete_contact/:_id', deleteContact)
 
 //edit conctact 
 router.put('/edit/:id',editContact)

 //export router 
 module.exports = router 
