const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const logger=require('./middleware/logger');
const members=require('./Members');
const app=express();
/*app.get('/',(req,res)=>{
    //res.send('Hiii from Express Js');
    res.sendFile(path.join(__dirname,'public','index.html'));
})*/
//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Homepage route
app.get('/',(req,res)=>res.render('index',{
    title:'Members App',
    members
}));
//Init middleware
app.use(logger)
//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Set Static Folder **Overridden by Homepage Route
app.use(express.static(path.join(__dirname,'public')));
//Setting routes
app.use('/api/members',require('./routes/api/membersApi'));
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server is running on PORT '+PORT));