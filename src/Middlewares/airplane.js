const { StatusCodes } = require("http-status-codes");
const {ErrorResponse}=require("../utils/common")
async function validateCreateReq(req,res,next){
     const {modelNo,capacity}=req.body;
     if(!modelNo || !capacity){
          ErrorResponse.message="inavlid request parameters";
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(ErrorResponse)
     }
     next();
}
module.exports=validateCreateReq;