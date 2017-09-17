const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();
const keys = require("./config/keys");
const PORT = process.env.PORT || 5000;
passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:"/auth/google/callback"
},(accessToken)=> {
    console.log(accessToken);
}));

app.get("/auth/google",passport.authenticate('google',{
    scope:['profile','email']
})
//access the route ,will get to the auth authentication
//what aspect we want to have,just access profile&&email,users'acccout
);

app.get("/auth/google/callback",passport.authenticate("google"));
app.listen(PORT);