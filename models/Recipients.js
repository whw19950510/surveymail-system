var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const recipentSchema = new Schema({
    email:String,
    responded:{type:Boolean,default:false}
});
module.exports={recipentSchema};