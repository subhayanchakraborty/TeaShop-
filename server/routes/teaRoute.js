const express = require('express');
const router=express.Router();

const teaModel=require('../models/teaModel');

//Get all tea ||@GET REQUEST
router.get("/getAllTeas", async (req,res)=>{
   try{
     const teas=await teaModel.find({});
     res.send(teas)
   }catch(err){
     res.json({message:err})
   }
});

module.exports=router;
