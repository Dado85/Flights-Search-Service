const express=require("express");
const airPlaneroutes = require("./airPlaneRoutes");
const cityRoutes = require("./cityRoutes");
const airPortroutes = require("./airPortRoutes");
const flightRoutes = require("./flightRoutes");
const v1Routes=express.Router();
v1Routes.use("/airplanes",airPlaneroutes);
v1Routes.use("/cities",cityRoutes);
v1Routes.use("/airports",airPortroutes);
v1Routes.use("/flights",flightRoutes);
module.exports=v1Routes