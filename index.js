const express=require('express');
const path=require('path');

const logger=require('./middleware/logger');
const app=express();
/*app.get('/',(req,res)=>{
    //res.send('Hiii from Express Js');
    res.sendFile(path.join(__dirname,'public','index.html'));
})*/

//Init middleware
app.use(logger)

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/members',require('./routes/api/membersApi'));
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server is running on PORT '+PORT));