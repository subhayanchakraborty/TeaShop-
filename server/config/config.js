const mongoose=require('mongoose');

const connectDB=async()=>{
   try{
     const url=process.env.MONGO_URL;
     const conn=await mongoose.connect(url,{});
     console.log(`Mongodb database connected! ${conn.connection.host}`);
   }
   catch(error){
      console.log(`error ${error.message}`);
   }
}
mongoose.set('strictQuery', false);

module.exports=connectDB;