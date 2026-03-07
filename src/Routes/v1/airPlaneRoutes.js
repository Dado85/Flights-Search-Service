const express=require("express");
const{AirPlaneController}=require("../../controller/index")
const { validateCreateReq } = require("../../Middlewares");
const airPlaneroutes=express.Router();
airPlaneroutes.post("/",validateCreateReq,AirPlaneController.createAirplanes);
airPlaneroutes.get("/",AirPlaneController.getAirPlanes);
airPlaneroutes.get("/:planeId",AirPlaneController.getAirPlane);
airPlaneroutes.delete("/:planeId",AirPlaneController.destroyAirPlane);
airPlaneroutes.patch("/:planeId",AirPlaneController.updateAirPlane);
module.exports=airPlaneroutes