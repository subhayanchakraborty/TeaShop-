const mongoose=require('mongoose');
const dotenv=require('dotenv');
const connectDB=require('./config/config');

const Tea =require('./models/teaModel');
const Teas =require('./data/tea-data');

//configure dotenv and mongodb conn file
dotenv.config()
connectDB()

//import data
const importData = async () => {
    try{
      await Tea.deleteMany()
      const sampleData=Teas.map(tea=>{ return {...tea}});
      await Tea.insertMany(sampleData);
      console.log('Data imported');
      process.exit();
    } catch(error){
      console.log(`${error}`)
      process.exit(1);
    }
}

const dataDestroy=()=>{

}
if(process.argv[2]==='-d'){
    dataDestroy()
}
else {
    importData();
}