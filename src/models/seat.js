"use strict";
const { Model } = require("sequelize");
const { Enum } = require("../utils/common/index.js");
const { BUSINESS, ECONOMY, FIRSTCLASS, BUSINESS_ECONOMY } = Enum.Seat_Type;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplanes, {
        foreignKey: "airplaneId",
      });
    }
  }
  Seat.init(
    {
      arplaneId: { type: DataTypes.INTEGER, allowNull: false },
      row: { type: DataTypes.INTEGER, allowNull: false },
      col: { type: DataTypes.STRING, allowNull: false },
      type: {
        type: DataTypes.ENUM,
        values: [BUSINESS, ECONOMY, FIRSTCLASS, BUSINESS_ECONOMY],
        defaultValue: ECONOMY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Seat",
    },
  );
  return Seat;
};
