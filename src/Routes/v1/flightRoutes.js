const express = require("express");
const { FlightController } = require("../../controller/index");
// const { validateCreateReq } = require("../../Middlewares");
const flightRoutes = express.Router();
flightRoutes.post("/", FlightController.createFlights);
flightRoutes.get("/:flightId", FlightController.getFlight);
flightRoutes.get("/", FlightController.getAllFlights);
module.exports = flightRoutes;
