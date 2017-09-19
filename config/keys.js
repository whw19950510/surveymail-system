
if(process.env.Node_ENV==="production")
{
   module.export=require("./prod.js");
}
else
{
    module.export=require("./dev.js");
}
