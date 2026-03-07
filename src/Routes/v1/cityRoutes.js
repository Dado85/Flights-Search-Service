const express=require("express");
const {CityController}=require("../../controller/index.js")
const cityRoutes=express.Router();
cityRoutes.post("/",CityController.createCity);
cityRoutes.get("/",CityController.getAllCities);
cityRoutes.delete("/:cityId",CityController.destoryCity);
cityRoutes.patch("/:cityId",CityController.updateCity);
module.exports=cityRoutes