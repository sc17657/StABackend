'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userid: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      loss: {
        type: Sequelize.STRING
      },
      year_of_loss: {
        type: Sequelize.INTEGER
      },
      date_joined: {
        type: Sequelize.STRING
      },
      street_address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.NUMERIC
      },
      email: {
        type: Sequelize.STRING
      },
      em_contact: {
        type: Sequelize.STRING
      },
      em_phone: {
        type: Sequelize.NUMERIC
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};