const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/error/app-error");
const { CityRepository } = require("../repositories/index");

const cityObj = new CityRepository();
async function createCity(data) {
  try {
    const city = await cityObj.create(data);
    return city;
  } catch (error) {
    if (error.name === "TypeError") {
      throw new AppError(
        "cannot create a new city Object",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
    throw error;
  }
}
async function destroyCity(id) {
  try {
    const city = await cityObj.destroy(id);
    return city;
  } catch (error) {
    if (error.statusCodes === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city you requested is not present",
        error.statusCodes,
      );
    }
    throw new AppError(
      "can not delete reqd city",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function updateCity(id, data) {
  try {
    const { name } = data;
    const updtCity = await cityObj.update(id, { name });
    return updateCity;
  } catch (error) {
    if (error.statusCodes === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city you requested is not present",
        error.statusCodes,
      );
    }
    throw new AppError(
      "can not delete reqd city",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function getAllCities(filter) {
  try {
    const cities = await cityObj.getAll({name:filter.name});
    return cities;
  } catch (error) {
    throw new AppError(
      "can not fetch airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}

module.exports = {
  createCity,
  destroyCity,
  updateCity,
  getAllCities,
};
