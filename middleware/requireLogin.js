module.exports=(req,res,next)=>{
    if(!req.user)
        res.status(401).send("You must log in");
    next();
}