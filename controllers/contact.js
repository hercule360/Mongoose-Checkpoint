// require schema contact 
const { restart } = require('nodemon')
const contact = require('../models/contact')
const Contact = require('../models/contact')
const { param } = require('../routes/contactRoute')

exports.test = async (req, res) => {
try {
    res.send('this is a test !!!! ')
} catch (error) {
    console.log(error)
    
}

}
exports.addContact = async (req ,res) => {
    try {
        const {name ,Email , Phone} = req.body 
        const newContact =new contact ({name, email, phone })
        await newContact.save()
        res.status(200).send({meg:'contact added succesfuly',newContact})
    } catch (error) {
        restart.status(400).send ({mes:'this is an error', error})
    }
}
exports.getContact =async (req ,res) =>{
    try {
        const contact  = await contact.find()
        res.status(200).send(contact)
    } catch (error) {
        res.status(400).send(error)
        
    }
}

// get contact byID 
exports.getContactById =async (req, res) => {
    try {
        const {_id}= req.params
        const contact = await contact.findById({_id}) 
        if(!( contact )){
            res.status(404).send({meg :" contact not found "})
        }
        res.status(200).send(contact);
    } catch (error) {
        res.status(400).send(error)
    }
}

//delete contact 
exports.deleteContact = async(req,res)=> {
    try {
      const {_id} = req.params 
        await contact.findByIdAndDelete({_id})
        res.status(200).send ('contact delete succesfully ! ')
    } catch (error) {
        res.status(400).send(error)
        
    }
}
// update contact 
exports.editContact = async (req,res) =>{
    try {
        const {_id} = req.params 
        const newContact = req.body
        await contact.updateOne ({_id}),{$set : newContact}
        res.status(200).send({msg:"contact updated successfully !", newContact})
    } catch (error) {
        res.status(400).send(error)
    }
}