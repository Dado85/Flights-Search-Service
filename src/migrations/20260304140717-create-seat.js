'use strict';
/** @type {import('sequelize-cli').Migration} */
const { Enum } = require("../utils/common/index.js");
const { BUSINESS, ECONOMY, FIRSTCLASS, BUSINESS_ECONOMY } = Enum.Seat_Type;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arplaneId: {
        type: Sequelize.INTEGER,allowNull:false
      },
      row: {
        type: Sequelize.INTEGER,allowNull:false
      },
      col: {
        type: Sequelize.STRING,allowNull:false
      },
      type: {
        type: Sequelize.ENUM,
        values:[BUSINESS,ECONOMY,FIRSTCLASS,BUSINESS_ECONOMY],
        defaultValue:ECONOMY,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};