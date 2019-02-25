const moment=require('moment');
const fs=require('fs');
const logger=(req,res,next)=>{
    //console.log('Hello a request is made from :- '+req.url);
    //console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}::${moment().format()}`);
    fs.appendFileSync('log.txt',`\n ${req.protocol}://${req.get('host')}${req.originalUrl}::${moment().format()}`);
    next();
}
module.exports=logger;