const _ = require("lodash");
const Path=require("path-parser");
const {URL} = require("url");
const requireLogin=require("../middleware/requireLogin");
const requireCredits=require("../middleware/requireCredits");
const mongoose=require("mongoose");
const Survey=mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate=require("../services/emailTemplates/surveyTemplate");
module.exports=app=>{
    app.get("/api/surveys",requireLogin,(req,res)=>{
        Survey.find({_user:req.user.id}).select({recipients:false}).then(surveys=>{
            res.send(surveys);
        });
    });
    app.get("/api/surveys/:surveyId/:choice",(req,res)=>{
        res.send("Thanks for voting");
    });
    app.post("/api/surveys/webhooks",(req,res)=>{
        const p=new Path("/api/surveys/:surveyId/:choice");
        const events = _.map(req.body,({event})=>{
            const path=new URL(event.url).pathname;
            const match = p.test(pathname);
            if(match) return {email:event.email,surveyId:match.surveyId,choice:match.choice};

        });
    const compactEvents=_.compact(events);
    const uniqueEvents=_.uniqBy(compactEvents,"email","surveyId");
    uniqueEvents.forEach(({email,surveyId,choice})=>{
        Survey.updateOne({
        _id:surveyId,
        recipients:{
            $eleMatch:{email:email,responded:false}
        }
    },{
        $inc:{[choice]:1},
        $set:{"recipients.$.responded":true},
        lastResponded:new Date()
        }).exec();
    });
});

    app.post("/api/surveys",requireLogin,requireCredits,function(req,res,done){
        const{title,subject,body,recipients}= req.body;//async
        const survey=new Survey({
            title:title,
            subject:subject,
            body:body,
            recipients:recipients.split(",").map(email=>{return {email:email.trim()}}),
            _user:req.user.id,
            dateSent:Date.now()
        }).save().then(survey=>{
            done(null,survey);               
        });;
        //send an email
        const mailer=new Mailer(survey,surveyTemplate(survey));
        mailer.send().then(mailer=>{
            req.user.credits-=1;
            req.user.save().then(user=>{
                res.send(user);
            });                
        });
        
        
    });
};
        /*
        const mailer=new Mailer(survey,surveyTemplate(survey));
        //save user info to database
        try{
            await mailer.send(); //await
            await survey.save();//await
            req.user.credits-=1;
            const user = await req.user.save();//await
            res.send(user);
        }
        catch(err) {
            res.status(422).send(err);
        }
        */  
