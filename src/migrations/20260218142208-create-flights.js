'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNo: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      deptrAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      deptTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      boardingGate: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,allowNull:false
      },
      totalSeats: {
        type: Sequelize.INTEGER,allowNull:false
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
    await queryInterface.dropTable('Flights');
  }
};