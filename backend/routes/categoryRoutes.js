/* const express = require('express');
const Category = require('../models/Category');
const asyncHandler = require('express-async-handler');
const router = express.Router();

//get route for all categories
router.get('/categories',(req,res) => {
    Category.find().exec().then((data,error) => {
        if(error) return res.status(400).json({status:false,error});
        return res.status(200).json({
            status:true,
            message: "get category successfully",
            data
        })
    })
})

router.post('/create',(req,res) => {
    const category = new Category(req.body);
    category.save((error,data) => {
        if(error) return res.status(400).json({status:false,error});
        return res.status(200).json({
            status:true,
            message: "category has been added successfully",
            data
        })
    })
})

module.exports = router; */