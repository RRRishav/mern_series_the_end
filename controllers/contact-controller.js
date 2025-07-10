const Contact = require("../models/contact-model");

const contact = async (req,res)=>{
    const {name,email,message} = req.body;
    const contact = await Contact.create({name,email,message});
    res.status(201).json({message:"Contact created successfully",contact});
}

module.exports = {contact};