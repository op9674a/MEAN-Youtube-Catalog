var express = require('express');
var app = express();

app.use("/")

app.get('/', (req,res)=>{
    res.send("Test")
});





app.listen(3000, function(){
    console.log('listening...');
});
