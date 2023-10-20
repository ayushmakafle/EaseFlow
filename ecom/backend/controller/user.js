const ErrorHandler = require('../utils/ErrorHandler');
const express = require("express");
const path = require['path'];
const User = require['../model/User'];
const router = express.Router();
const { upload } = require("../multer");


//POST route for creating a user at the "/create-user" endpoint. The upload.single("file") middleware is used to handle a single file upload, with the field name "file."
router.post("/create-user",upload.single("file"),async (req,res) => {
    const {name,email,password} = req.body; //extracts data from req.body object where data from the POST request is stored.
    const userEmail = await User.findOne({email}); //checks if a user with the provided email already exists in the database using User.findOne({ email })
    
    if (userEmail) {
        const error = new ErrorHandler("user already exists", 400);
        return next(error);
      }
      

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    //creating user object
    const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl,
    };

    console.log(user); //logging user object
});

module.exports=router;