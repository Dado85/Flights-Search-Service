"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("seats", [
  { arplaneId: 1, row: 1, col: 'A', type: 'firstclass', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 1, row: 1, col: 'B', type: 'firstclass', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 1, row: 2, col: 'A', type: 'business', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 1, row: 2, col: 'B', type: 'business', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 1, row: 10, col: 'A', type: 'economy', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 1, row: 10, col: 'B', type: 'economy', createdAt: new Date(), updatedAt: new Date() },

  // Airplane 5
  { arplaneId: 5, row: 1, col: 'A', type: 'firstclass', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 5, row: 1, col: 'B', type: 'firstclass', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 5, row: 5, col: 'A', type: 'business', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 5, row: 5, col: 'B', type: 'business', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 5, row: 15, col: 'A', type: 'economy', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 5, row: 15, col: 'B', type: 'economy', createdAt: new Date(), updatedAt: new Date() },

  // Airplane 6
  { arplaneId: 6, row: 1, col: 'A', type: 'firstclass', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 6, row: 1, col: 'B', type: 'firstclass', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 6, row: 3, col: 'A', type: 'business', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 6, row: 3, col: 'B', type: 'business', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 6, row: 20, col: 'A', type: 'economy', createdAt: new Date(), updatedAt: new Date() },
  { arplaneId: 6, row: 20, col: 'B', type: 'economy', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
