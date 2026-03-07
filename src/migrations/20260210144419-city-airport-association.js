'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      type:'FOREIGN KEY',
      fields:['cityId'],
      name:'city-fk-constraints',
      references:{
        table:"Cities",
        field:'id'
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports","city-fk-constraints")
  }
};
