const crudRepository = require("./crud-repositoy");
const { Flights } = require("../models/index.js");
const { Op } = require("sequelize");
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
      const limit = data.limit ? parseInt(data.limit) : 5;
      const offset = data.pages ? parseInt(data.pages) : 1;
      const flights = await Flights.findAll({
        where: filterObj,
        limit,
        offset,
      });
      return flights;
    } catch (error) {
      throw new AppError(
        "can not fetch flights",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
module.exports = FlightRepository;
