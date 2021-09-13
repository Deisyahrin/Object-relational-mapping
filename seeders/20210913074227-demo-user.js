'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
        await queryInterface.bulkInsert('Users', [{
        firstName: 'John Doe',
        lastName: 'mantab',
        email: 'admin',
        password: 'admin',
        updatedAt: "2021-09-12T16:04:10.154Z",
        createdAt: "2021-09-12T16:04:10.154Z"
        },
        {
        firstName: 'John Doe1',
        lastName: 'mantab',
        email: 'admin',
        password: 'admin',
        updatedAt: "2021-09-12T16:04:10.154Z",
        createdAt: "2021-09-12T16:04:10.154Z"
        },
        {
        firstName: 'John Doe2',
        lastName: 'mantab',
        email: 'admin',
        password: 'admin',
        updatedAt: "2021-09-12T16:04:10.154Z",
        createdAt: "2021-09-12T16:04:10.154Z"
        }
        ], {});
   
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
