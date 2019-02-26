const express=require('express');
const router=express.Router();
const uuid=require('uuid');
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
//Add a new member
router.post('/',(req,res)=>{
   // res.send(req.body);
    const newMember={
        id:uuid.v4(),
        name:req.body.name,
        dept:req.body.dept
    }
    if(!newMember.name||!newMember.dept)
    {
        return res.status(400).json({msg:`please include a name and email`});
    }
    members.push(newMember);
    res.json(members);
});
//update a member
router.put('/:id',(req,res)=>{
    //res.send(req.params.id);
    const found=members.some(member=>member.id===parseInt(req.params.id));
    if(found==true){
       const updateMember=req.body;
       members.forEach(member=>{
        if(member.id===parseInt(req.params.id)){
            member.name=updateMember.name?updateMember.name:member.name;
            member.dept=updateMember.dept?updateMember.dept:member.dept;
            res.json({msg:'member was updated',member}); 
        }
       }); 
    }
    else
        res.status(400).json({msg:`No id ${req.params.id} was found`});   
    // res.send(`id ${req.params.id} was not found`);
});
module.exports=router;