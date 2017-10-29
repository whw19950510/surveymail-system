const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin=require("../middleware/requireLogin");
module.exports = app=>{
    app.post("/api/stripe",requireLogin,function(req,res){
         stripe.charges.create({
         amount:500,
         currency:'usd',
         description:"$5 for 5 credits",
         source:req.body.id
        }).then(charge=>{
            //console.log(charge);
        });
        req.user.credits+=5;
        req.user.save().then(function(user){
                res.send(user);
            });
        });

};