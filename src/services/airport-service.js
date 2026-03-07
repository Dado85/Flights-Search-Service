const { StatusCodes } = require("http-status-codes");
const { AirPortRepository} = require("../repositories/index");
const AppError = require("../utils/error/app-error");
const airPortObj = new AirPortRepository();
async function createAirports(data) {
  try {
    const airport = await airPortObj.create(data);
    return airport;
  } catch (error) {
    console.log(error);

    if (error.name === "TypeError") {
      throw new AppError(
        "cannot create a new airport Object",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
    throw error;
  }
}
async function getAllAirports() {
  try {
    const airports = await airPortObj.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "can not fetch airports",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function getAirport(id) {
  try {
    const airport = await airPortObj.get(id);
    return airport;
  } catch (error) {
    if (error.statusCodes === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airport you requested is not present",
        error.statusCodes,
      );
    }
    throw new AppError(
      "can not fetch airport by id",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function destroyAirport(id) {
  try {
    const response = await airPortObj.destroy(id);
    return response;
  } catch (error) {
   if(error.statusCodes===StatusCodes.NOT_FOUND){
       throw new AppError(
        "The airport you requested is not present",
        error.statusCodes,
      );
   }
    throw new AppError(
      "can not delete reqd airport",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function updateAirport(id,data) {
   try {
      const{modelNo,capacity}=data;
      const updtairport=await airPortObj.update(id,{modelNo,capacity});
      return updtairport;
   } catch (error) {
      if(error.statusCodes===StatusCodes.NOT_FOUND){
         throw new AppError(
        "The airport you requested is not present",
        error.statusCodes,
      );
      }
       throw new AppError(
      "can not delete reqd airport",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
   }
}
module.exports = {
  createAirports,
  getAllAirports,
  getAirport,
  destroyAirport,
  updateAirport
};
