const express = require('express');
const meals=require('./meals.json');
const cors=require('cors');
const details=require('./details.json');

const app =  express();
app.use(cors());
app.use(express.json());

app.get('/meals',(req,res)=>{
    res.json(meals);
});
app.listen(3000,()=>{
    console.log("PORT 3000");
});
app.get('/details',(req,res)=>{
    res.json(details);
});
