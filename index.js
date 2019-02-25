const express=require('express');
const path=require('path');
const app=express();
/*app.get('/',(req,res)=>{
    //res.send('Hiii from Express Js');
    res.sendFile(path.join(__dirname,'public','index.html'));
})*/
const members=[
    {
        id:1,
        name:'Rishi Mukherjee',
        dept:'CSE'
    },
    {
        id:2,
        name:'Sneha Bhatacharjee',
        dept:'CSE'
    },
    {
        id:3,
        name:'Souvik Mukherjee',
        dept:'AEIE'
    }
];
//gets all the members
app.get('/api/members',(req,res)=>{
    res.json(members);
})
//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server is running on PORT '+PORT));