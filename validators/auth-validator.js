const {z} = require("zod");

const signupSchema = z.object({
    username: z.string().min(3,{
        message:"Username must be at least 3 characters long"
    }),
    email: z.string().email({
        message:"Invalid email address"
    }),
    password: z.string().min(8,{
        message:"Password must be at least 8 characters long"
    }),
    phone: z.string().min(10,{
        message:"Phone number must be at least 10 characters long"
    }),
});



module.exports = {signupSchema};
