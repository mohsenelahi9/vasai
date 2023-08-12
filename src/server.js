const express =  require('express');
const app =express();

app.use(express.static(__dirname + "./public"));

app.get('/username' , function (req,res){
    console.log(req.parms);
    res.send('hello');
})

app.listen( config.port , ()=> {
    console.log(`server is running on port  ${config.port}`);
} )