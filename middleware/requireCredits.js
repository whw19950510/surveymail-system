module.exports=(req,res,next)=>{
    if(req.user.credits<1)
        res.status(402).send("You must pay for credits");
    next();
}