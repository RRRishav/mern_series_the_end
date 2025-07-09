const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
   

},{timestamps:true});

userSchema.methods.generateToken = async function(){

     const token = jwt.sign({userId:this._id
        ,email:this.email,
        isAdmin:this.isAdmin,
     }, process.env.JWT_SECRET_KEY, {expiresIn: "30d"})

     return token;

}






const User = mongoose.model("User", userSchema);

module.exports = User;