const express=require('express');
const bodyParser=require('body-parser')


const app=express();
const Port=5000;

app.use(bodyParser.json());

app.use('/users',require("./routes/users"))

app.listen(Port,()=>console.log(`server running on port ${Port}`))