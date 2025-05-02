const express = require('express');
const app = express();
const port = 8000;

const connectDB = require('./db/dbconnection'); // Import DB function
const User = require('./db/user');
const cors = require('cors');


// Connect to MongoDB
connectDB(); 

// Middleware
app.use(express.json());
app.use(cors());

// Registration Route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        const user = new User({
            username,
            password
        });

        await user.save();
        res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ "internal server error": err.message });
    }
});
//LOgin Route
app.post('/login',async(req,res)=>{
    try{
         const {username,password} = req.body;
          const user = await User.findOne({username});
         if(!user){
             return res.status(400).json({message:"User not found"});
         }
          if(user.password !== password){
             return res.status(400).json({message:"Invalid password"});
          }
            res.status(200).json({message:"Login successfully"});
         }catch(err){
            console.log(err);
            res.status(500).json({"internal server error":err.message})
         }
    
})

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
