const express = require("express");
const passport = require("passport");
var mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bodyParser = require("body-parser");
var Users = require("./models/User");
var Surveys=require("./models/Survey");
mongoose.connect(keys.mongoURI);
require("./services/passport");

const app = express();
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge:30*24*60*60*1000,//maximum keep time
    keys:[keys.cookieKey] //cookie config key
}));
app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");
authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if(process.env.NODE_ENV==="production") {
    //make sure that express will serve up production assets, like main.js
    app.use(express.static("client/build"));
    //the express will serve up index.html when it's react route
    const path=require("path")
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);