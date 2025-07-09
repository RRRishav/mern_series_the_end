 const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


const Home = (req, res) => {
  res.send("Hello World");
};




const register = async (req, res) => {
    try{
        const {username, email, password, phone} = req.body;


        const userExist  = await  User.findOne({email:email})

        if(userExist){
            return res.status(400).json({message: "User already exists"});
        }


        const saltround = 10
        const hashedPassword = await bcrypt.hash(password, saltround)

        const user = await User.create({username, email, password:hashedPassword, phone})

       console.log(user);

       res.status(201).json({message: "User registered successfully", token:await user.generateToken(),
    userId:user._id.toString()});  
    }catch(error){
        res.status(500).json({message: error.message});
    }
}



module.exports = { Home,register };
