const mongoose =require('mongoose');

const teaSchema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    size: [],
    prices: [],
    category: {
        type:String,
        require:true
    },
    image: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    }
},{timestamps:true});

const teaModel=mongoose.model("tea",teaSchema);
module.export =teaModel;