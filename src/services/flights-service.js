const { StatusCodes } = require("http-status-codes");
const {
  FlightRepository,
  AirPlaneRepository,
} = require("../repositories/index.js");
const AppError = require("../utils/error/app-error.js");
const { compareTime } = require("../utils/helper/compare-time.js");
const flightObj = new FlightRepository();
const airplaneobj = new AirPlaneRepository();
async function createFlights(data) {
  try {
    const airplane = await airplaneobj.get(data.airplaneId);
    if (!compareTime(data.arrTime, data.deptTime)) {
      throw new AppError(
        "Arrival time must be greater than departure time",
        StatusCodes.BAD_REQUEST,
      );
    }
    const flight = await flightObj.create({
      ...data,
      totalSeats: airplane.capacity,
    });
    return flight;
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
async function getFlight(data) {
  try {
    const flight = await flightObj.get(data);
    return flight;
  } catch (error) {
    throw new AppError(
      "can not fetch flights",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
async function getAllFlights(data) {
  try {
    const flights=await flightObj.getAllFlights(data);
    return flights;
  } catch (error) {
    throw new AppError(
      "can not fetch flights",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}

module.exports = {
  createFlights,
  getFlight,
  getAllFlights,
};
