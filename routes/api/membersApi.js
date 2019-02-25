const express=require('express');
const router=express.Router();
const members=require('../../Members.js');
//gets all the members
router.get('/',(req,res)=>{
    res.json(members);
});

//get a single member
router.get('/:id',(req,res)=>{
    //res.send(req.params.id);
    const found=members.some(member=>member.id===parseInt(req.params.id));
    if(found==true)
        res.json(members.filter(member=>member.id===parseInt(req.params.id)));
    else
        res.status(400).json({msg:`No id ${req.params.id} was found`});   
    // res.send(`id ${req.params.id} was not found`);
});
module.exports=router;