const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { ErrorResponse, SucessResponse } = require("../utils/common");

async function createCity(req, res) {
  try {
    const { name } = req.body;
    const city = await CityService.createCity({ name });
    SucessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function destoryCity(req, res) {
  try {
    const { cityId } = req.params;
    const city = await CityService.destroyCity(cityId);
    SucessResponse.data = city;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function updateCity(req, res) {
  try {
    const { cityId } = req.params;
    const { name } = req.body;
    const city = await CityService.updateCity(cityId, { name });
    SucessResponse.data = city;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function getAllCities(req, res) {
  try {
    const cities = await CityService.getAllCities(req.query);
    SucessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
module.exports = {
  createCity,
  destoryCity,
  updateCity,
  getAllCities,
};
