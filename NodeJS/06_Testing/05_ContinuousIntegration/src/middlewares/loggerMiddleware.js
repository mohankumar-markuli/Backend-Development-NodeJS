const logger = (req,res,next) =>{
    console.log("Request received on logger: ",req.url);
    next();
}

module.exports = {logger};