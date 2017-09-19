var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new Schema({
    googleId:String,
    //name: String
});

mongoose.model("users",userSchema);