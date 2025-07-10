const {signupSchema} = require("../validators/auth-validator.js");

const validate = (schema)=>{
    return async (req,res,next)=>{
        const {error} = await schema.parseAsync(req.body);
        if(error){
            return res.status(400).json({message:error.message});
        }
        next();
    }
}
module.exports = {validate};