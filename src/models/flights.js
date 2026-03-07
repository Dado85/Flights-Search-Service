"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplanes, {
        foreignKey: "airplaneId",
        as: "airplaneDetail",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "deptAirportId",
        as: "departureAirport",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "arrAirportId",
        as: "arrivalAirport",
      });
    }
  }
  Flights.init(
    {
      flightNo: { type: DataTypes.STRING, allowNull: false, unique: true },
      airplaneId: { type: DataTypes.INTEGER, allowNull: false },
      deptrAirportId: { type: DataTypes.INTEGER, allowNull: false },
      arrAirportId: { type: DataTypes.INTEGER, allowNull: false },
      arrTime: { type: DataTypes.DATE, allowNull: false },
      deptTime: { type: DataTypes.DATE, allowNull: false },
      boardingGate: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER, allowNull: false },
      totalSeats: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Flights",
    },
  );
  return Flights;
};
