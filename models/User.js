var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new Schema({
    googleId:String,
    credits:{type:Number,default:0}
});

mongoose.model("users",userSchema);