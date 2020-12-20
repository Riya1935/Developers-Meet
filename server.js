const express=require('express');
const connectDB = require('./config/db.js');


const app=express();

connectDB();

const PORT=process.env.PORT || 5000;

app.get('/', (req,res)=> res.send('Server running!'));

app.listen(PORT, ()=> console.log("Server started at PORT "+ PORT));
