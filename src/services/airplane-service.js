const { StatusCodes } = require("http-status-codes");
const { AirPlaneRepository } = require("../repositories/index");
const AppError = require("../utils/error/app-error");
const airPlaneObj = new AirPlaneRepository();
async function createAirplanes(data) {
  try {
    const airplane = await airPlaneObj.create(data);
    return airplane;
  } catch (error) {
    console.log(error);

    if (error.name === "TypeError") {
      throw new AppError(
        "cannot create a new Airplane Object",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
    throw error;
  }
}
async function getAllAirplanes() {
  try {
    const airplanes = await airPlaneObj.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "can not fetch airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function getAirPlane(id) {
  try {
    const airplane = await airPlaneObj.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCodes === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested is not present",
        error.statusCodes,
      );
    }
    throw new AppError(
      "can not fetch airplane by id",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function destroyAirplane(id) {
  try {
    const response = await airPlaneObj.destroy(id);
    return response;
  } catch (error) {
   if(error.statusCodes===StatusCodes.NOT_FOUND){
       throw new AppError(
        "The airplane you requested is not present",
        error.statusCodes,
      );
   }
    throw new AppError(
      "can not delete reqd airplane",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function updateAirPlane(id,data) {
   try {
      const{modelNo,capacity}=data;
      const updtAirplane=await airPlaneObj.update(id,{modelNo,capacity});
      return updtAirplane;
   } catch (error) {
      if(error.statusCodes===StatusCodes.NOT_FOUND){
         throw new AppError(
        "The airplane you requested is not present",
        error.statusCodes,
      );
      }
       throw new AppError(
      "can not delete reqd airplane",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
   }
}
module.exports = {
  createAirplanes,
  getAllAirplanes,
  getAirPlane,
  destroyAirplane,
  updateAirPlane
};
