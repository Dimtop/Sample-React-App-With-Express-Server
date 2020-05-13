const cors = require('cors');

const express = require('express');
const app = express();



app.use(cors());


app.get("/api/test", (req,res)=>{
    res.send({result:"got"});
});

app.listen(4000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is up.");
    }
});