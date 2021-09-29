"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = await queryInterface.bulkInsert("users", [
      { name: "Ginny Carpenter", userid: "gin0731", password: "41booher", loss: "Husband, Tom", year_of_loss: 2008, date_joined: "Jan 2009", street_address: "504 S. Main", city: "Port Byron", state: "IL", zip: 61275, phone: 5636501783, email: "gin0731@Reagan.com", em_contact: "Sue Carpenter", em_phone: 5636503660},



    ]);
  
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

  }
}