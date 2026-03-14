const { StatusCodes } = require("http-status-codes");
const { AirPlaneService } = require("../services");
const { ErrorResponse, SucessResponse } = require("../utils/common");
async function createAirplanes(req, res) {
  try {
    const { modelNo, capacity } = req.body;
    const airplane = await AirPlaneService.createAirplanes({
      modelNo,
      capacity,
    });
    SucessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function getAirPlanes(req, res) {
  try {
    const airplanes = await AirPlaneService.getAllAirplanes();
    SucessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function getAirPlane(req, res) {
  try {
    const { planeId } = req.params;
    const airplane = await AirPlaneService.getAirPlane(planeId);
    SucessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function destroyAirPlane(req, res) {
  try {
    const { planeId } = req.params;
    const airplane = await AirPlaneService.destroyAirplane(planeId);
    SucessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
async function updateAirPlane(req, res) {
  try {
    const { planeId } = req.params;
    const{modelNo,capacity}=req.body;
    const airplane = await AirPlaneService.updateAirPlane(planeId,{modelNo,capacity});
    SucessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SucessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}
module.exports = {
  createAirplanes,
  getAirPlanes,
  getAirPlane,
  destroyAirPlane,
  updateAirPlane
};
