const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { ErrorResponse, SucessResponse } = require("../utils/common");

async function createFlights(req, res) {
  try {
    const {
      flightNo,
      airplaneId,
      deptrAirportId,
      arrAirportId,
      arrTime,
      deptTime,
      boardingGate,
      price,
    } = req.body;
    const flight = await FlightService.createFlights({
      flightNo,
      airplaneId,
      deptrAirportId,
      arrAirportId,
      arrTime,
      deptTime,
      boardingGate,
      price,
    });
    SucessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function getFlight(req, res) {
  try {
    const { flightId } = req.params;
    const flight = await FlightService.getFlight(flightId);
    SucessResponse.data = flight;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function getAllFlights(req,res) {
   try {
     const flights=await FlightService.getAllFlights(req.query);
      SucessResponse.data = flights;
    return res.status(StatusCodes.OK).json(SucessResponse);
   } catch (error) {
    ErrorResponse.error=error;
     return res.status(error.statusCodes).json(ErrorResponse);
   }
}
module.exports = {
  createFlights,
  getFlight,
  getAllFlights
};
