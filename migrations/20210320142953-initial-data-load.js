'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('users', [
      { userFirstName: '', userLastName: '', password: '', accessLevel: 1, email: '', DOB: '', profileImage: '', securityQuestionOne: '', securityQuestionTwo: '', locationZone: '' },
    ]),

      await queryInterface.bulkInsert('fitness', [
        { userID: 1, pushUps: 0, sitUps: 0, boxJumps: 0, kilometersRan: 0, waterIntakeOz: 0 }
      ]),

      await queryInterface.bulkInsert('usersFitnessLinkings', [
        { userID: 1, fitnessID: 1 }
      ]),

      await queryInterface.bulkInsert('posts', [
        { accessLevelReq: 1, body: '', userID: 1 }
      ])

    return queryInterface.bulkInsert('resources', [
      { url: '', description: '', subject: '' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('resources')

    await queryInterface.bulkDelete('posts')

    await queryInterface.bulkDelete('usuersFitnessLinkings')

    await queryInterface.bulkDelete('fitness')

    return queryInterface.bulkDelete('users')
  }
};
