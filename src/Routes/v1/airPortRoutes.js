const express=require("express");
const {AirPortController}=require("../../controller/index.js")
// const { validateCreateReq } = require("../../Middlewares");
const airPortroutes=express.Router();
airPortroutes.post("/",AirPortController.createAirports);
airPortroutes.get("/",AirPortController.getAirports);
airPortroutes.get("/:airportId",AirPortController.getAirPort);
airPortroutes.delete("/:airportId",AirPortController.destroyAirPort);;
module.exports=airPortroutes