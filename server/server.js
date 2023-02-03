const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/config');
const morgan=require('morgan');
//config dotenv
dotenv.config()
//mongoDB connection
connectDB();

const app=express();
//middlewares
app.use(express.json());
app.use(morgan('dev'));
//route
app.use("/api/teas",require("./routes/teaRoute"));


app.get('/',(req,res)=>{
    res.send("<h1>hello from node server</h1>")
})

const port=process.env.PORT||8080;
app.listen(port,()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no. ${process.env.PORT}`);
});