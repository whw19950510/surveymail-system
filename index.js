const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.render();
});

app.listen(process.env.PORT);