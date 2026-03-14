const crudRepository = require("./crud-repositoy");
const { Flights } = require("../models/index.js");
const { Op } = require("sequelize");
const AppError = require("../utils/error/app-error.js");
const { StatusCodes } = require("http-status-codes");
const db=require("../models/index.js")
const{rowLevelLock}=require("./rawQueries.js")
class FlightRepository extends crudRepository {
  constructor() {
    super(Flights);
  }
  #createFilter(data) {
    let filter = {};
    const endTripDt = " 23:59:00";
    if (data.arrAirportId) {
      filter.arrAirportId = data.arrAirportId;
    }
    if (data.deptrAirportId) {
      filter.deptrAirportId = data.deptrAirportId;
    }
    if (data.minPrice !== undefined && data.maxPrice !== undefined) {
      filter.price = {
        [Op.between]: [data.minPrice, data.maxPrice],
      };
    } else if (data.minPrice !== undefined) {
      filter.price = {
        [Op.gte]: data.minPrice,
      };
    } else if (data.maxPrice !== undefined) {
      filter.price = {
        [Op.lte]: data.maxPrice,
      };
    }
    if (data.travellers) {
      Object.assign(filter, { totalSeats: { [Op.gte]: data.travellers } });
    }
    if (data.tripDate) {
      Object.assign(filter, {
        deptTime: { [Op.between]: [data.tripDate, data.tripDate + endTripDt] },
      });
    }
    return filter;
  }
  async getAllFlights(data) {
    try {
      const filterObj = this.#createFilter(data);
      const flights = await Flights.findAll({
        where: filterObj,
      });
      return flights;
    } catch (error) {
          console.log("REAL ERROR:", error);   
      throw new AppError(
        "can not fetch flights",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateRemainingSeats(flightId, seats, decrement = true) {
    await db.sequelize.query(rowLevelLock(flightId))
    const flight=await Flights.findByPk(flightId);
    if (decrement) {
      const response = await flight.decrement("totalSeats", { by: seats });
      return response;
    } else {
      const response = await flight.increment("totalSeats", { by: seats });
      return response;
    }
  }
}
module.exports = FlightRepository;
