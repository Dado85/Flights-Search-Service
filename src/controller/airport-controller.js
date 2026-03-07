const { StatusCodes } = require("http-status-codes");
const { AirPortService } = require("../services");
const { ErrorResponse, SucessResponse } = require("../utils/common");
async function createAirports(req, res) {
  try {
    const { name,code,address,cityId } = req.body;
    const airport = await AirPortService.createAirports({
       name,code,address,cityId
    });
    SucessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getAirports(req, res) {
  try {
    const airports = await AirPortService.getAllAirports();
    SucessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getAirPort(req, res) {
  try {
    const { airportId } = req.params;
    const airport = await AirPortService.getAirport(airportId);
    SucessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function destroyAirPort(req, res) {
  try {
    const { airportId } = req.params;
    const airport = await AirPortService.destroyAirport(airportId);
    SucessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}

module.exports = {
  createAirports,
  getAirPort,
  getAirports,
  destroyAirPort,
};
