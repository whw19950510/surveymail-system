var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const recipentSchema=require("./Recipients");
const surveySchema = new Schema({
    title:String,
    subject:String,
    body:String,
    recipients:[recipentSchema],
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    _user:{type:Schema.Types.ObjectId,ref:"User"},
    dateSent:Date,
    lastResponded:Date
});

mongoose.model("surveys",surveySchema);