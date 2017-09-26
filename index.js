const express = require("express");
const passport = require("passport");
var mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bodyparser = require("body-parser");
var Users = require("./models/User");
mongoose.connect(keys.mongoURI);
require("./services/passport")

const app = express();
app.use(bodyparser.json());
app.use(cookieSession({
    maxAge:30*24*60*60*1000,//maximum keep time
    keys:[keys.cookieKey] //cookie config key
}));
app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
authRoutes(app);
billingRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);